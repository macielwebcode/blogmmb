'use client'

import { deletePostAction } from "@/actions/post/delete-post.action"
import Dialog from "@/components/Dialog"
import clsx from "clsx"
import { Trash2Icon } from "lucide-react"
import { useState, useTransition } from "react"

type DeletePostBtnProps = {
    id: string
    title: string 
}

export default function AdminBtnDelete({id, title}: DeletePostBtnProps){
    
    const [isPending, startTransiction] = useTransition()
    const [showDialog, setShowDialog] = useState(false)

    function handleClick(){
        setShowDialog(true)
       
    }

    function handleConfirm(){
         startTransiction(async () => {
            const result = await deletePostAction(id)
             setShowDialog(false)
            if(result.error){
                alert(`Erro: ${result.error}`)
            }
        })
    }
    return(
        <>
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
            {showDialog && 
                <Dialog 
                    isVisible={showDialog}
                    content={`Tem certeza que deseja apagar o post: ${title}`} 
                    title='Apagar Post' 
                    onCancel={() => setShowDialog(false)}
                    onConfirm={handleConfirm}
                />
            }
        </>    
    )
}

