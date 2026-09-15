import clsx from "clsx";

type DialogProps = {
    isVisible?: boolean
}

export default  function Dialog({isVisible = false}: DialogProps){
    if (!isVisible) return null
    return(
        <div className={clsx(
            'fixed z-50 inset-0 bg-black/50 backdrop-blur-xs',
            'flex itemsn-center justify-center'
        )}>
            <div className={clsx(
                'bg-slate-100 p-6 rounded-lg max-w-2xl mx-6',
                'flex flex-col gap-6',
                'shadow-lg shadow-black/30 text-center'
            )}>
                <h3 className="text-xl font-extrabold">Titulo do dialog</h3>
                <p>
                    Lorem ipsum 
                </p>
                <div className="flex item-scenter justify-around"> 
                    
                <button className={clsx(
                        'bg-slate-200 hover:bg-slate-300 transition text-slate-950',
                        'flex items-center justify-center',
                        'py-2 px-4 rounded-lg cursor-pointer',
                    )}
                    autoFocus
                    >
                        Cancelar
                    </button>

                    <button
                        className={clsx(
                            'bg-blue-500 hover:bg-blue-600 transition text-blue-50',
                            'flex item-scenter justify-center',
                            'py-2 px-4 rounded-lg cursor-pointer'
                        )}
                    >
                        Ok

                    </button>
                </div>
            </div>
        </div>
    )
}