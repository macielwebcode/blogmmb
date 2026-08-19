import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';
export default defineConfig({
    out: './db/drizzle/migrations',
    schema: './db/drizzle/schema.ts',
    dialect: 'sqlite',
    dbCredentials: {
        url: process.env.DB_FILE_NAME,
    }
})