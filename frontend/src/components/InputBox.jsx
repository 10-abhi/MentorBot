export const InputBox = ({label , placeholder,onChange })=>{
    return <div className="pb-3">
        <div className="text-md text-zinc-400 text-left font-bold pb-3 px-2">
             {label}
        </div>
       <input placeholder={placeholder} onChange={onChange} className="w-full text-slate-500 px-2 py-2 border rounded" />
        
    </div>
}