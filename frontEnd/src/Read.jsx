import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {

    const {id} = useParams();

    const [student, setstudent] = useState({})

    useEffect(() => {
      axios.get('http://localhost:8081/read/'+id)
      .then(res => setstudent(res.data[0]))
      .catch(err => console.log(err))
    }, [id])


    return (
      <div>
        <h2>Student Details</h2>

        <h3>ID: {student.id}</h3>
        <h3>Name: {student.name}</h3>
        <h3>Email: {student.email}</h3>

        <Link to="/">Go Back</Link>
      </div>
    )
}

export default Read
