import Container from "./Components/Container.jsx";
import Header from "./Components/Header.jsx";
import Input from "./Components/Input.jsx";
import Button from "./Components/Button.jsx";
import { useState } from "react";

function App() {
const [InputValue,setInputValue]=useState("");


  function handleclick(event){
    let newValue=event.target.innerText;
    if(newValue==='C'){
    setInputValue("");
    }else if(newValue==='='){
   let result= eval(InputValue);
   setInputValue(result);
    }else{
     setInputValue(InputValue+newValue);
    }
     

  }

  return (
    <>
    <Container>
    <Header/>
    <Input value={InputValue}/>
    <Button handleclick={handleclick}/>
    </Container>
    </>
  )
}

export default App
