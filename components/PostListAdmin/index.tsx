import { findPostByIdAdminPrivate } from "@/lib/post/queries/admin"
import clsx from "clsx"
import { Trash2Icon } from "lucide-react"
import Link from "next/link"


export default async function PostListAdmin(){

    const posts = await findPostByIdAdminPrivate()
    return(
        <>
            {posts.map(post => {
                return <div 
                    className={clsx('py-2 px-2', 
                    !post.published && 'bg-slate-300', 
                    'flex gap-2 items-center justify-between'
                    )} key={post.id}>
                        
                    <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

                    {!post.published && (
                        <span className='text-xs
                         text-slate-600 
                         italic'>
                        Não publicado</span>
                    )}

                    <button>
                        <Trash2Icon size={18} />
                    </button>
                </div>
            })}
        </>
    )
}