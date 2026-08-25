export const dynamic = 'force-dynamic'

type idpostadmin = {
    params: Promise<{
        id: string
    }>
}

export default async function AdminPostIdPage({
    params,
}: idpostadmin){
    const { id } = await params
    return(
        <></>
    )
}