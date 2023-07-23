import {React, useEffect, useState} from "react";
import "./DashBoard.css";
import CourseCard from "../components/CourseCard"
import NavBar from "../components/NavBar";
import { Link, useLocation} from "react-router-dom";
import {LoggedIn, profile} from "../App";
import Cookies from 'js-cookie';

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
    const [user, setUser] = useState(false);
    let cookieValue = null;

    console.log(location.state);
    useEffect(() => {

        cookieValue = Cookies.get('ple');
        setUser(JSON.parse(cookieValue));
        
    }, [cookieValue])
    // create Course object
    const course = new Course( 
        1, 
        "Tutor Resource Library", 
        "The Term 3 library for Tutors",
        process.env.PUBLIC_URL+"/Spectrum Logo.png",
        new Date()
    );
    

    return (
        <>
        <NavBar user_role={user.user_role} username={user.username}></NavBar>
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
                    }}>
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

