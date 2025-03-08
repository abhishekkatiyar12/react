import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Content from './Components/Content'

function App() {


  return (
    <>
      <div className='mainContainer'>
        <div className='sidebar'>
        <Sidebar />
        </div>
        <div className='content'>
          <Header />
          <Content/>
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default App
