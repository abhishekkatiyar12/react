import { createContext,useState } from "react";

export const Todocontext= createContext([]);


function InnerContainer({children}){
   const [tasks, settask] = useState([]);
       // const [inputValue, setInputValue] = useState(""); // State to store input value
       // const [inputDate, setInputDate] = useState("");
     
       // function handleChange(event) {
       //   setInputValue(event.target.value);
       // }
     
       // function handledate(event) {
       //   setInputDate(event.target.value);
       // }
     
       function addItem(duetask,duedate) {
         let newarray = [...tasks, { task: duetask, date: duedate }];
         settask(newarray);
     
         // setInputValue("");
         // setInputDate("");
         
       }
     
     
       function deleteItem(name) {
         let newTask = tasks.filter((item) => {
           return item.task !== name;
         });
         settask(newTask);
       }
   
   return (
       <>
        <Todocontext.Provider value={{todoItems:tasks,addItem:addItem, deleteItem:deleteItem}}>
            {children}
        </Todocontext.Provider>
       
        </>
    )
}
export default InnerContainer;