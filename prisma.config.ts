import "dotenv/config";  // ← обязательно для загрузки .env
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",           // или "./prisma/schema.prisma" если папка prisma внутри
  migrations: {
    path: "prisma/migrations",              // стандартный путь
    // seed: "tsx prisma/seed.ts",          // раскомменти если есть seed
  },
  datasource: {
    url: env("DATABASE_URL"),               // берёт из .env
  },
});