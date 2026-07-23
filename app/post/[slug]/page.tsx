import { findPostBySlugCached } from "@/lib/post/queries"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type PostSlugProps = {
    params: Promise< {slug: string} >
}

export async function generateMetadata({
    params,
}: PostSlugProps): Promise<Metadata>{
    const { slug } = await params
    const post = await findPostBySlugCached(slug)
    return{
        title: post.title,
        description: post.excerpt
    }
}

export default async function PostSlugPage({ params }: PostSlugProps){
    const { slug } = await params
    let post 
    try{
        post = await findPostBySlugCached(slug)
    } catch{
        post = undefined
    }
    if(!post) notFound()

    return(
        <>a rota dinamica{post.title}</>
    )
}