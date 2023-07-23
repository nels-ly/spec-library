import {React} from "react";
import "./DashBoard.css";
import CourseCard from "../components/CourseCard"
import NavBar from "../components/NavBar";
import { Link, useLocation} from "react-router-dom";
import {LoggedIn, profile} from "../App";

class Course{
    constructor(course_id, course_title, course_desc, course_img, date_created){
        this.course_id = course_id;
        this.course_title = course_title
        this.course_desc = course_desc;
        this.course_img = course_img;
        this.date_created = date_created;
    }
}
export default function DashBoard(){
    // sets user_role to tutor by student, but user_role is obtained from Login
    const location = useLocation();
    const { user } = location.state || { user: { email: "placeholder", user_role: "placeholder" } };
    console.log(location.state);
    
    // create Course object
    const course = new Course( 
        1, 
        "Tutor Resource Library", 
        "The Term 3 library for Tutors",
        process.env.PUBLIC_URL+"/temp-course-icon.svg",
        new Date()
    );
    


    return (
        <>
        <NavBar user_role={user.user_role}></NavBar>
        <div className="landing-page-grid">
            <div className="col-1">
                <h1 className="h1-titles">Courses</h1>
                <div className="flex-div">
                    <Link to={{
                        pathname: "/course",
                        state: {
                            user: user,
                            course: course
                        }
                    }} className="course-card">
                    <CourseCard imgSrc={course.course_img} course_title={course.course_title}></CourseCard>
                    </Link>
                </div>
            </div>
            <div className="col-2">
                <h1 className="h1-titles">This Weeks Lessons</h1>
            </div>
            <div className="col-1">
                <h1 className="h1-titles">Classes</h1>
                <div className="flex-div">
                    <CourseCard imgSrc={course.course_img} course_title="Year 9 English"></CourseCard>
                    <CourseCard imgSrc={course.course_img} course_title="Year 10 Mathematics"></CourseCard>
                </div>
            </div>
            <div className="col-2">
                <h1 className="h1-titles">Recently Visited</h1>
            </div>
            
        </div>
        
        
        </>

    )
}

