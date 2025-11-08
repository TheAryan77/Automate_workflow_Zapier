import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";
const app = express();
const client = new PrismaClient();
app.post("/hooks/catch/:userId/:zapId", async (req, res) => {
    const userId = req.body.userId;
    const zapId = req.body.zapId;
    const body = req.body;
    await client.$transaction(async (tx) => {
        const run = await tx.zapRun.create({
            data: {
                zapId,
                metadata: body,
            }
        });
        await tx.zapRunAction.create({
            data: {
                zapRunId: run.id
            }
        });
    });
    res.json({
        message: "recived"
    });
});
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
