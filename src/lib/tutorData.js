import { headers } from "next/headers"
import { auth } from "./auth"

//  All tutor data
export const getAllTutorsInfo = async (search = "") => {
    const res = await fetch(`http://localhost:5000/tutors?search=${search}`)
    const data = await res.json()
    return data

}

// home page 6 tutors info
export const getSixTutorsInfo = async () => {
    const res = await fetch(`http://localhost:5000/six-tutors`);
    const data = await res.json()
    return data
}

// search tutor

// export const getSearchTutor = async () =>{
//     const res = await fetch(`http://localhost:5000/tutors?search=${search}`)
//     const data = await res.json()
//     return data
// }

// tutors Details page

export const getTutorDetailsInfo = async (id) => {
    try {

       const {token} = await auth.api.getToken({
        headers:await headers()
       })


        const res = await fetch(`http://localhost:5000/tutors/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token || ''}`,
                'Content-Type': 'application/json',
            },
            cache: 'no-store'
        });


        if (!res.ok) {
            console.error(`Fetch Failed: Status ${res.status}`);
            return null;
        }

        const data = await res.json();
        return data;

    } catch (error) {
        console.error("Tutor data fetch korte error hoise:", error);
        return null;
    }
}

// email filter data

export const getMyAddTutorsInfo = async (user) => {
    const {token} = await auth.api.getToken({
        headers:await headers()
       })

    try {
        const res = await fetch(`http://localhost:5000/my-tutors?email=${user.email}`, {

            headers: {
                'Authorization': `Bearer ${token}`
            },
            cache: 'no-store'
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error("Backend Error:", errorData.message);
            return [];
        }

        return await res.json();
    } catch (error) {
        console.error("Fetch failed:", error.message);
        return [];
    }
};



// my session data

export const getBookingData = async (id) => {

   const {token} = await auth.api.getToken({
        headers:await headers()
       })

    const res = await fetch(`http://localhost:5000/my-bookings/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data

}