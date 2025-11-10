import express from "express";
import { userrouter } from "./router/user";
import { zaprouter } from "./router/zap";

const app = express();
app.use(express.json());


app.use("/api/v1/user", userrouter);

app.use("/api/v1/zap", zaprouter);


app.get("/health", (_req, res) => {
	res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`API listening on port ${PORT}`);
});