
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = props => {

    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch(`courses.json`)
        .then(res=>res.json())
        .then(data => setCourses(data))
    },[])
    console.log(courses);

    return (
        <div className='w-3/4 flex flex-wrap justify-evenly gap-3'>
            {
                courses.map((courses,i)=><Course key={i} courses = {courses}></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    
};

export default Courses;