import { Link } from 'react-router'
import CourseMap from '../CourseMap/CourseMap'

function CourseMapPage() {
    return (
        <>
        <br />
        Mostly taken at Berkeley. <Link to="/course-list">Full list</Link>.
        <CourseMap />
        </>
    )
}

export default CourseMapPage
