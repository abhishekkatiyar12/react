
import { useContext, useRef } from 'react';
import Styles from './inputBox.module.css';
import { Todocontext } from '../store/to-do-items';



function InputBox() {

    let Context = useContext(Todocontext);
    let addItem = Context.addItem;

    let duetask = useRef();
    let duedate = useRef();

    function handleaddItem() {
        let task = duetask.current.value;
        let date = duedate.current.value;
        addItem(task, date);
        duetask.current.value = "";
        duedate.current.value = "";
    }



    return (
        <>
            <div className={Styles.input}>
                <input
                    type="text"
                    placeholder="Enter the task you want to Add"
                    className={Styles.inputStyle}
                    ref={duetask}
                // onChange={()=>{}}
                // value={input}
                />
                <input
                    type="date"
                    className={Styles.inputStyle}
                    // value={date}
                    ref={duedate}
                // onChange={()=>{}}


                />
                <button className={Styles.inputStyle} onClick={handleaddItem}>Add</button>
            </div>
        </>
    );
}

export default InputBox;
