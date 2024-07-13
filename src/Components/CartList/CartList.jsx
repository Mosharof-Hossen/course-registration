
import PropTypes from 'prop-types';

const CartList = ({ courses, credit, totalPrice }) => {
    return (
        <div className='md:w-1/4 mb-5 md:mb-0  bg-white rounded-lg p-6'>
            <h2 className='text-blue-700 font-bold'>Credit Hour Remaining {20 - credit} hr</h2>
            <hr className='my-3' />
            <h1 className='text-xl font-bold'>Course Name</h1>

            <ul className='mt-3 text-gray-500'>
                {
                    courses.map((course, inx) => (
                        <li className='text-sm' key={course.id}>{inx + 1}. {course.title} - {course.course_duration}h</li>
                    ))
                }
            </ul>
            <hr className='my-3' />
            <p className='text-lg font-semibold'>Total Credit Hour: {credit}</p>
            <hr className='my-3' />
            <p className='text-lg font-semibold'>Total Price: {totalPrice} Tk</p>
        </div>
    );
};

CartList.propTypes = {
    courses: PropTypes.array.isRequired,
    credit: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
};

export default CartList;