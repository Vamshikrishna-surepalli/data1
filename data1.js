import React,{ useState} from 'react';
import NewStudent from './NewStudent';
import StudentList from './StudentList';

function App() {
  const[createStudent,setCreateStudent]=useState(false)


  return (
    <div className="App ">
      
      <button name="New Student" onClick={()=>{setCreateStudent(true)}}>New Student</button>
      {!createStudent?<StudentList/>:<NewStudent/>}
    </div>
  )
  
}

export default App
