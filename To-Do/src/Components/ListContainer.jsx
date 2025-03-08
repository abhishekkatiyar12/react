import Styles from './ListContainer.module.css';

function ListContainer({handleclick, tasks}) {
   


   return (
       <div className={Styles.ListContainer}>
           <ul>
               {tasks.map((item, index) => (
                   <li key={index} className={Styles.listItem}>
                       <span>{item}</span>
                       <button className={Styles.button} value={item}  onClick={()=>handleclick(item)}>Buy</button>
                   </li>
               ))}
           </ul>
       </div>
   );
}

export default ListContainer;
