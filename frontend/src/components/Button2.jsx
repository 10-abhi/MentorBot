export function Button2({ label, onClick }) {
    return <div>
        <button onClick={onClick} type="button" class="w-full text-white bg-gradient-to-r from-teal-700 to-slate-700 hover:from-purple-700 hover:to-red-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{label}
            </button>
            </div>

}