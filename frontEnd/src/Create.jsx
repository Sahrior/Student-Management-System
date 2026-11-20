
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/student',values)
        .then(res => {navigate('/')})
        .catch(err => console.log(err))
    }


  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} >
          <h2>Add Student</h2>

          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter Name"
            onChange={e=>setValues({...values, name: e.target.value})}/>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Email"
            onChange={e=>setValues({...values, email: e.target.value})}/>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create
