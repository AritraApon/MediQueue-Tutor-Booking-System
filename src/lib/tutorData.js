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

export const getMyAddTutorsInfo = async(user) =>{
    const res = await fetch(`http://localhost:5000/my-tutors?email=${user?.email}`);const data = await res.json();
    return data
}