
import { Temporal } from "@js-temporal/polyfill";
import postgres from "@prisma/orm-postgres/runtime";
import type { Contract } from "./contract.d";
import contractJson from "./contract.json" with { type: "json" };

// Make Temporal available to PostgreSQL codecs in Node.js.
(globalThis as { Temporal?: unknown }).Temporal ??= Temporal;

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not configured");
}

export const db = postgres<Contract>({
  contract: contractJson as unknown as Contract,
  url: connectionString,
});
