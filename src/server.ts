import type { IncomingMessage, ServerResponse } from "node:http";
import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT) || 5000;

function getDbConnection(): Promise<typeof mongoose> {
  if (mongoose.connection.readyState === 1) {
    return Promise.resolve(mongoose);
  }
  return mongoose.connect(process.env.DATABASE_URL as string);
}

/** Vercel (@vercel/node) — no listen(); each request hits this handler */
export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> {
  await getDbConnection();
  app(req as Parameters<typeof app>[0], res as Parameters<typeof app>[1]);
}

/** Local: tsx / node dist */
if (!process.env.VERCEL) {
  getDbConnection()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
