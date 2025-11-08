import express from "express";
import { PrismaClient } from "./generated/prisma";



const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.post("/hooks/catch/:userId/:zapId", async (req, res) => {
  const { userId, zapId } = req.params;
  const body = req.body || {};

  try {
    await prisma.$transaction(async (tx:any) => {
      const run = await tx.zapRun.create({
        data: {
          zapId,
          metadata: body,
        },
      });

      await tx.zapRunOutbox.create({
        data: {
          zapRunId: run.id,
        },
      });
    });

    res.json({ message: "received" });
  } catch (err) {
    console.error("Error processing hook", err);
    res.status(500).json({ error: "Failed to process hook" });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
