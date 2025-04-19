import Container from "./Components/Container"
import Header from "./Components/Header"
import ListContainer from "./Components/listContainer.jsx"
import InputBox from "./Components/inputBox.jsx"
import { useState, useRef } from "react";
import ErrorMessage from "./Components/ErrorMessage.jsx";
import Todocontext from "./store/to-do-items.jsx";
function App() {

  const [tasks, settask] = useState([]);
  // const [inputValue, setInputValue] = useState(""); // State to store input value
  // const [inputDate, setInputDate] = useState("");
  let duetask = useRef();
  let duedate = useRef();

  // function handleChange(event) {
  //   setInputValue(event.target.value);
  // }

  // function handledate(event) {
  //   setInputDate(event.target.value);
  // }

  function addItem() {
    let newarray = [...tasks, { task: duetask.current.value, date: duedate.current.value }];
    settask(newarray);

    // setInputValue("");
    // setInputDate("");
    duetask.current.value = "";
    duedate.current.value = "";
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
        ̌  <Container>
          <Header />
          <InputBox input={duetask} date={duedate} />
          <ErrorMessage />
          <ListContainer/>
        </Container>
      </Todocontext.Provider>

    </>
  )
}

export default App
