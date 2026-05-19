//  All tutor data
 export const getAllTutorsInfo =  async()=>{
    const res = await fetch(`http://localhost:5000/tutors`)
    const data = await res.json()

    return data

}