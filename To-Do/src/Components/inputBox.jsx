
import Styles from './inputBox.module.css';

function InputBox({handleclick,addItem,input}) {
    

    return (
        <>
            <div className={Styles.input}>
                <input 
                    type="text"  
                    placeholder="Enter the task you want to Add" 
                    className={Styles.inputStyle} 
                    onChange={handleclick}
                    value={input}
                    />
                <button className={Styles.inputStyle} onClick={addItem}>Add</button>
            </div>
        </>
    );
}

export default InputBox;
