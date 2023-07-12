const tutor_course = {
    course_id: 1,
    course_name: "Tutor Resource Library",
    course_desc: "The term 3 library for Tutors",
    date_created: new Date()
};

function section(section_id, course_id, section_title) {
    this.section_id = section_id;
    this.course_id = course_id;
    this.section_title = section_title;
}

