
import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzle } from "drizzle-orm/libsql";
import { db } from "@/db/drizzle";





export class DrizzlePostRepository implements PostRepository{
    findBySlug(slug: string): Promise<PostModel> {
        throw new Error("Method not implemented.");
    }
    async findAllPublic(): Promise<PostModel[]>{
        const posts = await db.query.posts.findMany({
            
        })
    }
}