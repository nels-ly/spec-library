import * as api from "../api"

export const AddCourse = (courseDetails, navigate) => async (dispatch) => {

    try {

        const payload = await api.addCourse(courseDetails);
        console.log(payload);
    }
    catch (error) {
        console.log(error.message)
        alert(error.message);
    }


}