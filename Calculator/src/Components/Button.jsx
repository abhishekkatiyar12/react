import Styles from "./Button.module.css"

function Button({handleclick}){

    let buttons=['C','1','2','3','4','5','6','7','8','9','0','*','/','-','+','='];

    return (
        <>
        <div className={Styles["button-container"]}>
           
            {buttons.map((button,index)=>{
                return(
                <button key={index} className={Styles.button} onClick={handleclick}>{button}</button>
                )
            })}
           
        </div>

        </>
    )
}
export default Button;