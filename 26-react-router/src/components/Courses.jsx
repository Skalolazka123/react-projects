import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import queryString from 'query-string'
import courses from '../data/courses'

const SORT_KEYS = Object.keys(courses[0])

function sortCourses(courses, key) {
    const sortedCourses = [...courses]
    if (!key || !SORT_KEYS.includes(key)) {
        return sortedCourses
    }
    sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
    return sortedCourses
}

const Courses = () => {
    const location = useLocation()
    const query = queryString.parse(location.search)
    const navigate = useNavigate()
    const [sortKey, setSortKey] = useState(query.sort)
    const [sortedCourses, setSortedCourses] = useState(
        sortCourses(courses, sortKey)
    )

    useEffect(() => {
        //redirect to all courses
        if (!SORT_KEYS.includes(sortKey)) {
            navigate('.')
            setSortKey() // clear state
            setSortedCourses([...courses]) //arr courses to first state
        }
    }, [sortKey, navigate])

    return (
        <>
            <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>

            <div id="courses">
                {sortedCourses.map((course) => (
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
