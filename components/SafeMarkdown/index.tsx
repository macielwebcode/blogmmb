import ReactMarkdown from "react-markdown"
import rehypeSanitize from "rehype-sanitize"
import remarkGfm from "remark-gfm"

type SafeMakdownProps = {
    markdown: string
}

export default function SafeMarkdown({markdown}: SafeMakdownProps){
    return(
        <div>
            <ReactMarkdown 
                rehypePlugins={[rehypeSanitize]} 
                remarkPlugins={[remarkGfm]}>{markdown}
            </ReactMarkdown>
        </div>
    )
}