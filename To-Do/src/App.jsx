import Container from "./Components/Container"
import Header from "./Components/Header"
import ListContainer from "./Components/listContainer.jsx"
import InputBox from "./Components/inputBox.jsx"
import { useState,useRef } from "react";
import ErrorMessage from "./Components/ErrorMessage.jsx";
function App() {

  const [tasks, settask] = useState([]);
  // const [inputValue, setInputValue] = useState(""); // State to store input value
  // const [inputDate, setInputDate] = useState("");
   let inputtask=useRef();
   let inputdate=useRef();

  // function handleChange(event) {
  //   setInputValue(event.target.value);
  // }

  // function handledate(event) {
  //   setInputDate(event.target.value);
  // }

  function addItem() {
    let newarray = [...tasks, { task: inputtask.current.value, date: inputdate.current.value }];
    settask(newarray);

    // setInputValue("");
    // setInputDate("");
    inputtask.current.value="";
    inputdate.current.value="";
  }


  function deleteItem(name) {
    let newTask = tasks.filter((item) => {
      return item.task !== name;
    });
    settask(newTask);
  }

  return (
    <>
      <Container>
        <Header />
        <InputBox  addItem={addItem} input={inputtask} date={inputdate} />
        {tasks.length === 0 && <ErrorMessage />}
        <ListContainer tasks={tasks} deleteItem={deleteItem} />
      </Container>

    </>
  )
}

export default App
