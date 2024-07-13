
import './App.css'
import CartList from './Components/CartList/CartList'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <div className='container mx-auto px-8'>
        <Header></Header>
        <main className='flex flex-col md:flex-row'>
          <Courses></Courses>
          <CartList></CartList>
        </main>
      </div>
    </>
  )
}

export default App
