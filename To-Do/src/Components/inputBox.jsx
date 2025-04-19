
import { useContext } from 'react';
import Styles from './inputBox.module.css';
import Todocontext from '../store/to-do-items';

function InputBox({input, date }) {

 let Context=useContext(Todocontext);
 let addItem=Context.addItem
    return (
        <>
            <div className={Styles.input}>
                <input
                    type="text"
                    placeholder="Enter the task you want to Add"
                    className={Styles.inputStyle}
                    ref={input}
                    // onChange={()=>{}}
                    // value={input}
                />
                <input
                    type="date"
                    className={Styles.inputStyle}
                    // value={date}
                    ref={date}
                    // onChange={()=>{}}
                   
                    
                />
                <button className={Styles.inputStyle} onClick={addItem}>Add</button>
            </div>
        </>
    );
}

export default InputBox;
