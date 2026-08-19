
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const postTable = sqliteTable('posts', {
    id: text('id').primaryKey(),
    title: text('title').notNull().unique(),
    slug: text('slug').notNull().unique(),
    excerpt: text('excerpt').notNull().unique(),
    content: text('content').notNull().unique(),
    coverImageUrl: text('coverImageUrl').notNull().unique(),
    published: integer('published', {mode: 'boolean'}).notNull().unique(),
    createdAt: text('createdAt_t').notNull().unique(),
    updatedAt: text('updatedAt_t').notNull().unique(),
    author: text('author').notNull().unique(),

})

// export type PostTableSelectMode = InferSelectModel<typeof postTable>
// export type PostTableInsertMode = InferInsertModel<typeof postTable>