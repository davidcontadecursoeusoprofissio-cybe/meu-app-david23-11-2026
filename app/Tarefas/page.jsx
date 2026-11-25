export default function Tarefas(){
    return(
        <div className="bg-gray-200 w-85 h-60  ms-100 mt-20 rounded-md">
            <h1 className="text-[20px] font-bold">📝Minhas Tarefas</h1>
            <p className="ms-2">0 tarefas pendentes</p>
                <div>
        <input type="text" placeholder="O que deseja fazer" className="ms-2 mt-4" />
        <button className="bg-blue-700  text-white ms-2 h-7 w-20 rounded-md cursor-pointer">Adicionar</button>
        <>
            <nav >
                <ul className="flex gap-5 mt-4">
                    <li className="bg-blue-700 rounded-md text-white ms-2">Todas</li>
                    <li className="bg-gray-400 rounded-md w-20">Pendentes</li>
                    <li className="bg-gray-400 rounded-md w-21">Concluídas</li>
                    
                </ul>
            </nav>
            <p className="text-gray-400 ms-2 mt-4">Nenhuma tarefa por aqui</p>
        </>
        </div>
         <button className="bg-red-500 rounded-md ms-60 mt-6 cursor-pointer">exluir tarefas</button>
        </div>
    )
}