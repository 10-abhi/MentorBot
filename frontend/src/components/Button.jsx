export const Button1 = ({text , onClick})=>{
  return <div> 
    <button onClick={onClick} className=" rounded-xl bg-slate-400 px-7 py-2 text-base font-medium text-navy-400 ">
    {text}
     </button>
</div> 
}