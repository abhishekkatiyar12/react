import { useContext } from "react";
import Todocontext from "../store/to-do-items";


function ErrorMessage() {
    const Context = useContext(Todocontext);
    const tasks = Context?.TodoItems||[];
    return (
        <>
            {tasks.length === 0 && <div>please add the tasks</div> }
        </>
    )

}

export default ErrorMessage;