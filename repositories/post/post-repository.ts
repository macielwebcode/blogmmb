import { PostModel } from "@/models/post/post-model";

export interface PostRepository{
    findAllPublic(): Promise<PostModel[]>
    findBySlug(slug: string): Promise<PostModel>
}