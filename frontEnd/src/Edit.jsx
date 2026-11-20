import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {

    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
      axios.get('http://localhost:8081/read/'+id)
      .then(res => setValues({...values,name:res.data[0].name,email:res.data[0].email}))
      .catch(err => console.log(err))
    }, [id])

    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    const handleUpdate = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:8081/update/'+id,values)
        .then(res=> navigate('/') )
        .catch(err=> console.log(err))

    }
    
    



  return (
    <div>
      <div>
        <form onSubmit={handleUpdate} >
          <h2>Update student</h2>

          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter Name" value={values.name}
            onChange={e=>setValues({...values, name: e.target.value})}/>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Email  " value={values.email}
            onChange={e=>setValues({...values, email: e.target.value})}/>
          </div>

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Edit
