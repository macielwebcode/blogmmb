'use client'

import { deletePostAction } from "@/actions/post/delete-post.action"
import clsx from "clsx"
import { Trash2Icon } from "lucide-react"
import { useTransition } from "react"

type DeletePostBtnProps = {
    id: string
    title: string
}

export default function AdminBtnDelete({id, title}: DeletePostBtnProps){
    
    const [isPending, startTransiction] = useTransition()

    function handleClick(){
        startTransiction(async () => {
            const result = await deletePostAction(id)
            alert(`o result é: ${result}`)
        })
        
    }
    return(
        <button className={clsx(
            'text-red-500 cursor-pointer'
        )}
        aria-lavel={`Apagar post: ${title}`}
        title={`Aapagar post: ${title}`}
        onClick={handleClick}
        disabled={isPending}
        >
            <Trash2Icon size={18} />
        </button>
    )
}

