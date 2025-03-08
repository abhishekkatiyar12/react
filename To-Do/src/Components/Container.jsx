import Styles from './Container.module.css'
function Container(props){


return (
    <>
    <div className={Styles.containerstyle}>{props.children}</div>
    </>
)
}

export default Container;