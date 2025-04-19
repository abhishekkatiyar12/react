import { useContext } from 'react';
import Styles from './ListContainer.module.css';
import Todocontext from '../store/to-do-items';

function ListContainer() {
   

let Context=useContext(Todocontext);
let tasks=Context.todoItems
let deleteItem=Context.deleteItem;

   return (
       <div className={Styles.ListContainer}>
           <ul>
               {tasks.map((item, index) => (
                   <li key={index} className={Styles.listItem}>
                       <span>{item.task}</span>
                       <span>{item.date}</span>
                       <button className={Styles.button} value={item}  onClick={()=>deleteItem(item.task)}>Delete</button>
                   </li>
               ))}
           </ul>
       </div>
   );
}

export default ListContainer;
