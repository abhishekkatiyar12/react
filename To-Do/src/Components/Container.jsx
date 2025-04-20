import Styles from './Container.module.css'
import InnerContainer from '../store/to-do-items';

function Container(props){

return (
    <>
     <InnerContainer>
     <div className={Styles.containerstyle}>{props.children}</div>
     </InnerContainer>
    
    </>
)
}

export default Container;