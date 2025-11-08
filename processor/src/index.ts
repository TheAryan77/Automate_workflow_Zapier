import { PrismaClient } from "@prisma/client";
import { Kafka } from "kafkajs";

const prisma = new PrismaClient();

const TOPIC_NAME = "zap-event";

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"],
});

async function main() {
    const producer = kafka.producer();
    await producer.connect();

    try {
        while (true) {
            const pendingRows = await prisma.zapRunOutbox.findMany({
                where: {},
                take: 10,
            });

            if (pendingRows.length > 0) {
                await producer.send({
                    topic: TOPIC_NAME,
                    messages: pendingRows.map((row) => ({
                        // Use zapRunId as key and payload; ensure values are strings
                        key: String((row as any).zapRunId),
                        value: JSON.stringify({ zapRunId: (row as any).zapRunId }),
                    })),
                });
            }

            // Backoff to avoid tight loop when there's no work
            await new Promise((r) => setTimeout(r, 1000));
        }
    } finally {
        await producer.disconnect();
    }
}

main().catch((err) => {
    console.error("Processor crashed:", err);
    process.exit(1);
});
main()