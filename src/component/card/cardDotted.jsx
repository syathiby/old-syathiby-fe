const CardDotted = ({ children }) => {

    return (

        <div className="border-2 rounded border-l-0 border-t-0 pb-1 pr-1 bg-slate-200 border-dotted border-slate-500">
            <div className="h-full w-full bg-white px-4 py-4 rounded-md shadow-sm border-2 border-slate-500">
                { children }    
            </div>
        </div>

    )

}

export default CardDotted