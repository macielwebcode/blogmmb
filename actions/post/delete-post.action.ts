import { deletePostAction } from '@/actions/post/delete-post.action';
import { drizzle } from 'drizzle-orm/libsql';
'use server'

import { postRepository } from "@/repositories/post/json-post-repository"
import { postTable } from '@/db/drizzle/schema';
import { DrizzleD1Database } from 'drizzle-orm/d1';
import { db } from '@/db/drizzle';
import { eq } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';

export async function deletePostAction(id: string){
    //checar login do usuário
    //checar id do post válido

    if(!id || typeof id !== 'string'){
        return{
            error: 'Dados inválidos'
        }
    }

    const post = await postRepository.findBySlug(id).catch(() => undefined)
    if(!post){
        return{
            error: 'Post não existe'
        }
    }

    await db.delete(postTable).where(eq(postTable.id, id))

    // revalidateTag('posts')
    // revalidateTag(`post-${id}`)

    return{
        error: ''
    }

}