import { findPostBySlugCached } from "@/lib/post/queries"
import Image from "next/image";
import PostHeading from "../PostHeading";
import PostDate from "../PostDate";
import SafeMarkdown from "../SafeMarkdown";

type SinglePostProps = {
    slug: string
}

export default async function SinglePost({slug}: SinglePostProps){
    const post = await findPostBySlugCached(slug)
    return(
        <>a rota dinamica{post.title}
            <div>
                <Image
                    src={post.coverImageUrl}
                    width={1200}
                    height={720}
                    alt={post.title}
                />
                <PostHeading url={`/post/${post.slug}`} as="h2">{post.title}</PostHeading>
                <p>
                    {post.author} | <PostDate dateTime={post.createdAt}></PostDate>
                </p>

                <SafeMarkdown markdown={post.content} />

            </div>
        </>
    )
}