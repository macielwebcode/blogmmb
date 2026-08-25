import { postRepository } from "@/repositories/post/json-post-repository"
import { cache } from "react"


export const findPostByIdAdminPrivate = cache(async (id: string) =>{
    return postRepository.findBySlug(id)
})