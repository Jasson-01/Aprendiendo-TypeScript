import { Tarea } from "./Tarea"

type ListaTareas1 = {
    listaTareas: string[]
    // void -> No nos va a devolver nada
    borrarTarea: (index:number) => void 
}

export const ListaTareas = ({listaTareas, borrarTarea}:ListaTareas1) => {
  return (
    <div className="taskList">
        {listaTareas.map((tarea,index)=>(
            <Tarea key={index} tarea={tarea} borrarTarea={()=> borrarTarea(index)}></Tarea>
        ))}
    </div>
  )
}