
type PostSlugProps = {
    params: Promise< {slug: string} >
}

export default async function PostSlugPage({ params }: PostSlugProps){
    const { slug } = await params
    return(
        <>a rota dinamica{slug}</>
    )
}