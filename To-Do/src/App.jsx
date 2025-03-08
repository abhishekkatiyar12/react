import Container from "./Components/Container"
import Header from "./Components/Header"
import ListContainer from "./Components/listContainer.jsx"
import InputBox from "./Components/inputBox.jsx"
import { useState } from "react";
import ErrorMessage from "./Components/ErrorMessage.jsx";
function App() {
  
  const [tasks,settask] = useState([]);
  const [inputValue, setInputValue] = useState(""); // State to store input value
  
      function handleChange(event) {
          setInputValue(event.target.value); // Update state with input value
      }
  
      function addItem() {
          let newarray=[...tasks,inputValue];
          settask(newarray);
          setInputValue("");
      }
  return (
   <>
   <Container>
   <Header/>
   <InputBox handleclick={handleChange} addItem={addItem} input={inputValue}/>
   {tasks.length===0 && <ErrorMessage/>}
   <ListContainer tasks={tasks}/>
   </Container>
   
   </>
  )
}

export default App
