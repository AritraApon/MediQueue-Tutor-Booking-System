//  All tutor data
 export const getAllTutorsInfo =  async(search = "")=>{
    const res = await fetch(`http://localhost:5000/tutors?search=${search}`)
    const data = await res.json()
    return data

}

// home page 6 tutors info
export const getSixTutorsInfo = async()=>{
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

export const getTutorDetailsInfo = async(id)=>{
    const res = await fetch (`http://localhost:5000/tutors/${id}`)
    const data =await res.json()
    return data
}

// email filter data

export const getMyAddTutorsInfo = async (user) => {

    if (!user?.email) return [];

    try {
        const res = await fetch(`http://localhost:5000/my-tutors?email=${user.email}`, {
            cache: 'no-store',
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

 export const getBookingData = async(id)=>{
    const res = await fetch(`http://localhost:5000/my-bookings/${id}`);
    const data = await res.json();
    return data

 }