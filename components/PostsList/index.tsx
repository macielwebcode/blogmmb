
import PostCoverImage from "../PostCoverImage"
import PostSummary from "../PostSummary"
import { findAllPublicPosts } from '@/lib/post/queries'

export default async function PostsList(){
    const posts = await findAllPublicPosts()
    return(
        <div>
            {posts.map(item => {
                const postLink = `/post/${item.slug}`
                return <div key={item.id}>
                    <PostCoverImage src='' href="#" />
                    <PostSummary 
                        postLink={postLink} 
                        postHeading='h2' 
                        createdAt={item.createdAt} 
                        title={item.title} 
                        excerpt={item.excerpt}
                    />
                </div>
            })}
        </div>
    )
}