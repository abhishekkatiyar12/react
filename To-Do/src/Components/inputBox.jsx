
import Styles from './inputBox.module.css';

function InputBox({addItem, input, date }) {


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
                    // value={date}abhise
                    ref={date}
                    // onChange={()=>{}}
                   
                    
                />
                <button className={Styles.inputStyle} onClick={addItem}>Add</button>
            </div>
        </>
    );
}

export default InputBox;
