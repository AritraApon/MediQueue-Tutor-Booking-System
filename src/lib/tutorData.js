//  All tutor data
 export const getAllTutorsInfo =  async()=>{
    const res = await fetch(`http://localhost:5000/tutors`)
    const data = await res.json()

    return data

}

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