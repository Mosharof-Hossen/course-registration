
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = ({ handleSelectCourse }) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(`courses.json`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='md:w-3/4 flex flex-wrap justify-evenly gap-y-10 gap-x-4'>
            {
                courses.map((course, i) => <Course key={i} handleSelectCourse = {handleSelectCourse} course={course}></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleSelectCourse:PropTypes.func.isRequired
};

export default Courses;