
import PropTypes from 'prop-types';

const Course = ({ course , handleSelectCourse }) => {
    const { cover_img, title, course_duration, course_price, short_description } = course;
    // console.log(courses);
    return (
        <div className='w-[300px]  p-4 rounded-lg bg-white'>
            <img src={cover_img} alt="" />
            <p className='font-bold my-3'>{title}</p>
            <p className='text-sm text-gray-500 mb-3'>{short_description}</p>
            <div className='flex justify-between mb-3'>
                <p>$ <span className='text-gray-500'>Price {course_price}</span></p>
                <p ><span className='text-gray-500'>Credit: {course_duration}hr</span></p>
            </div>
            <button onClick={()=>handleSelectCourse(course)} className='border rounded-lg bg-blue-500 hover:bg-blue-600 text-white py-1 w-full'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectCourse : PropTypes.func.isRequired
};

export default Course;