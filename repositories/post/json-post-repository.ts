import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { readFile } from "fs/promises";
import { resolve } from "path";


const ROOT_DIR = process.cwd()
const JSON_POSTS_FILE_PATH = resolve(
    ROOT_DIR,
    'db',
    'seed',
    'posts.json'
)

export class JsonPostRepository implements PostRepository{
    private async readFromDisk(): Promise<PostModel[]> {
        const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8')
        const parsedJson = JSON.parse(jsonContent)
        const { posts } = parsedJson
        return posts
    }
    
    async findAllPublic(): Promise<PostModel[]> {
        const posts = await this.readFromDisk()
        return posts.filter(post => post.published)
    }

    async findBySlug(slug: string): Promise<PostModel>{
        
        const posts = await this.findAllPublic()
        const post = posts.find(post => post.slug === slug)
        if(!post) throw new Error('post nao encontrato')
        return post
    }
}

export const postRepository: PostRepository = new JsonPostRepository();