import { findPostByIdAdminPrivate } from "@/lib/post/queries/admin"


export default async function PostListAdmin(){

    const posts = await findPostByIdAdminPrivate()
    return(
        <>
            {posts.map(post => {
                return <p key={post.id}>{post.title}</p>
            })}
        </>
    )
}