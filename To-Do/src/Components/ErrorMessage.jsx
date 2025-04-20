import { useContext } from "react";
import { Todocontext } from '../store/to-do-items';



function ErrorMessage() {
    const Context = useContext(Todocontext);
    const tasks = Context?.todoItems||[];
    return (
        <>
            {tasks.length === 0 ? <div>please add the tasks</div>:null }
        </>
    )

}

export default ErrorMessage;