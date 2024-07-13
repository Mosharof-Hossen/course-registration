
import { useState } from 'react'
import './App.css'
import CartList from './Components/CartList/CartList'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
  const [courses, setCourse] = useState([]);
  const [credit, setCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectCourse = (course) => {
    let updateTime = credit + course.course_duration;
    const findCourse = courses.find((crs) => crs.id === course.id);
    if (findCourse) {
      alert("This Course Already selected.")
      return
    } else if (updateTime > 20) {
      alert("You have not enough Credit Hour")
      return
    }
    setTotalPrice(totalPrice + course.course_price);
    setCredit(credit + course.course_duration);
    setCourse([...courses, course]);
  }
  return (
    <>
      <div className='container mx-auto px-8'>
        <Header></Header>
        <main className='flex flex-col-reverse md:flex-row'>
          <Courses handleSelectCourse={handleSelectCourse}></Courses>
          <CartList courses={courses} credit = {credit} totalPrice = {totalPrice}></CartList>
        </main>
      </div>
    </>
  )
}

export default App
