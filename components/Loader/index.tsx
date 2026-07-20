
type LoaderProperties = {
    containerClasses?: string;
}

export default function Loader({ containerClasses = ''}: LoaderProperties){
    return(
        <div>
            <div className={`
                flex items-center 
                justify-center 
                w-10 
                h-10 
                border-5 
                border-t-transparent 
                border-slate-900 
                rounded-full
                animate-spin
                ${containerClasses}`}
            >

            </div>
        </div>
    )
}