import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'




const Home = () => {


    const [data, setdata] = useState([])


    useEffect(() => {

        axios.get('http://localhost:8081/')
        .then(res =>  setdata(res.data))
        .catch(err => console.log(err) )
      
    
      
    }, [])
    

    




  return (
    <div>
        <h2>Student List</h2>
        <div>
            <Link to="/create" > Create +  </Link>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {data.map((student,index)=>{

                    return <tr key={index} >

                        <td> {student.id} </td>
                        <td> {student.name} </td>
                        <td> {student.email} </td>

                        <td>
                            <button>Read</button>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>

                    </tr>
                    
                })}
            </tbody>


        </table>
    </div>
  )
}

export default Home
