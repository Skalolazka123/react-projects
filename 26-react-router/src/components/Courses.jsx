import courses from '../data/courses'
import { Link } from 'react-router-dom'
const Courses = () => {
    return (
        <>
            <h1>Courses</h1>

            <div id="courses">
                {courses.map((course) => (
                    <div key={course.id}>
                        <Link to={course.slug} className="courseLink">
                            {course.title}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Courses
