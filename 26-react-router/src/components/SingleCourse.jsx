import { Link, useNavigate, useParams } from 'react-router-dom'
import courses from '../data/courses'
import NotFound from './NotFound'
function SingleCourse() {
    const params = useParams()
    const navigate = useNavigate()
    const course = courses.find((course) => course.slug === params.courseSlug)
    // Simply show not found component
    //  if (!course) {
    //     return (
    //         <>
    //             <NotFound />
    //             <Link to=".." relative="path" className="allCourses">
    //                 Go To All Cources
    //             </Link>
    //         </>
    //     )
    // }

    if (!course) {
        navigate('..', { relative: 'path' })
    }
    return (
        <>
            <h1>{course.title}</h1>
            <div className="singleCourses">
                <h2>Course slug: {course.slug}</h2>
                <h3>Course id: {course.id}</h3>
                <Link to=".." relative="path" className="allCourses">
                    Go To All Cources
                </Link>
            </div>
        </>
    )
}
export default SingleCourse
