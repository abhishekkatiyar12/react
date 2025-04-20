import Container from "./Components/Container"
import Header from "./Components/Header"
import ListContainer from "./Components/listContainer.jsx"
import InputBox from "./Components/inputBox.jsx"
import ErrorMessage from "./Components/ErrorMessage.jsx";

function App() {

  return (
    <>
      <Container>
        <Header />
        <InputBox />
        <ErrorMessage />
        <ListContainer />
      </Container>

    </>
  )
}

export default App
