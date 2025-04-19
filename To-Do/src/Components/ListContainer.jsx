import Styles from './ListContainer.module.css';

function ListContainer({ deleteItem,tasks}) {
   


   return (
       <div className={Styles.ListContainer}>
           <ul>
               {tasks.map((item, index) => (
                   <li key={index} className={Styles.listItem}>
                       <span>{item.task}</span>
                       <span>{item.date}</span>
                       {/* <button className={Styles.button} value={item}  onClick={()=>handleclick(item)}>Buy</button> */}
                       <button className={Styles.button} value={item}  onClick={()=>deleteItem(item.task)}>Delete</button>
                   </li>
               ))}
           </ul>
       </div>
   );
}

export default ListContainer;
