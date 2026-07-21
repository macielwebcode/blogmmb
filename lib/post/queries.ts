import { cache } from 'react';
import { postRepository } from './../../repositories/post/json-post-repository';

export const findAllPublicPosts  = cache(async () =>
    await postRepository.findAllPublic()
)

export const findPostBySlugCached  = cache(async (slug: string) =>
    await postRepository.findBySlug(slug)
)