import React from 'react'


function ClassDetails({selectedClass,setViewClass}) {

  
    console.log(selectedClass)
    let student_list = selectedClass.students.map((s) => (
        <div key={s.id}>
            <ul>
                <li>{s.name}</li>
                <li>Birthday: {s.birthday}</li>
                <li>Email: {s.email}</li>
                <li>Address: {s.address}</li>
                <br></br>
            </ul>
        </div>
    )) 

  return (
    <div id='display'>
        <h1>{selectedClass.teacher.subject}</h1>
        <header>{selectedClass.time} Student List</header>
        <br></br>
        {student_list}
        <br></br>
        <button onClick={()=>setViewClass(false)} variant="fill" color="primary" >
        Return to Class List
        </button>
    </div>
  )
}

export default ClassDetails