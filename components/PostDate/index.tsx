import { formatDatetime } from "@/utils/format-datetime"

type PostDateProps = {
    dateTime: string
}

export default function PostDate({dateTime}: PostDateProps){
    return(
        <>

            <time
                className="text-slate-600 block text-sm/tight"
                dateTime={dateTime}
                title={formatDatetime(dateTime)}
            >
                {formatDatetime(dateTime)}
            </time>

        </>
    )
}