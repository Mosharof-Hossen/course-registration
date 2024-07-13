
import { useState } from 'react'
import './App.css'
import CartList from './Components/CartList/CartList'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
  const [courses, setCourse] = useState([]);

  const handleSelectCourse = (course) =>{
    const findCourse = courses.find((crs)=>crs.id === course.id);
    if(findCourse){
      alert("This Course Already selected.")
      return
    }
    setCourse([...courses,course]);
  }
  console.log(courses);

  return (
    <>
      <div className='container mx-auto px-8'>
        <Header></Header>
        <main className='flex flex-col-reverse md:flex-row'>
          <Courses handleSelectCourse = {handleSelectCourse}></Courses>
          <CartList courses={courses}></CartList>
        </main>
      </div>
    </>
  )
}

export default App
