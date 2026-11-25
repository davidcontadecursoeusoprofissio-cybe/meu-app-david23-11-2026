export default function Nav (){
    return(
        <nav className=" flex bg-purple-500 gap-320 h-15 w-384 text-red-200">
            <ul className="flex gap-5 ms-10 ">
                <li className="mt-5 ms-130">inicio</li>
                <li className="mt-5">produtos</li>
                <li className="mt-5">usuario</li>
            </ul>
            <button className=" mt-3 -ms-315 bg-red-400 h-10 w-20 rounded-sm cursor-pointer">Login</button>
        </nav>
    )
}