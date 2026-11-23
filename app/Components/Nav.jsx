export default function Nav (){
    return(
        <nav className=" flex bg-purple-500 gap-320 h-15 w-384">
            <ul className="flex gap-5 ms-10 ">
                <li className="mt-5">inicio</li>
                <li className="mt-5">produtos</li>
            </ul>
            <button>Login</button>
        </nav>
    )
}