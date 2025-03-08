import Styles from './Input.module.css';


function Input({value}){
    return (
        <>
        <input type="text"  readOnly className={Styles["Input-styles"]} value={value}></input>
        </>
    )
}

export default Input;