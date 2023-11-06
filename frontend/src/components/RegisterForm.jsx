import React, { useState, useEffect } from 'react'
import {useNavigate, useParams} from "react-router-dom";
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

function RegisterForm() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        id: null,
        fisrtName: '', 
        lastName:'',  
        email: '',
        password: '',
        role_id:'',
        password_confirmation: ''
    })

    const [roles, setRoles] = useState([])
    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()
    const [errors, setErrors] = useState(null)

    useEffect(() => {     
        getRoles();
      }, []);

    const getRoles = () => {
        setLoading(true)
        axiosClient.get('/roles')
          .then(({ data }) => {
            setRoles(data.data)
            setLoading(false)
            console.log(roles)
          })
          .catch(() => {
            const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
          setLoading(false)
        })
      }


    const onSubmit = ev => {
        ev.preventDefault()
        axiosClient.post('/users', user)
        .then(() => {
          setNotification('User was successfully created')
          navigate('/users')
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        })
    }


  return (
    <div className="mb-4">
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="firstName1">First name</label>
                    <input className="form-control" onChange={ev => setUser({...user, firstName: ev.target.value})} id="firstName1" type="text" placeholder="Enter your first name" />
                </div>
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="lastName1">Last name</label>
                    <input className="form-control" onChange={ev => setUser({...user, lastName: ev.target.value})} id="lastName1" type="text" placeholder="Enter your last name" />
                </div>
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input className="form-control" onChange={ev => setUser({...user, email: ev.target.value})} id="exampleInputEmail1" type="email" placeholder="Enter email" />
                            
                </div>
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="phone">Phone</label>
                    <input className="form-control" onChange={ev => setUser({...user, phone: ev.target.value})} id="phone" placeholder="Enter phone" />
                </div>
                        
                {/* <div className="col-md-6 form-group mb-3">
                    <label htmlFor="picker2">Birth date</label>
                    <input type='date' className="form-control" id="picker2" placeholder="yyyy-mm-dd" name="dp" />
                </div> */}


                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="picker1">Select</label>
                    
                        {loading && 
                            <select className="form-control">
                                <option>...</option>
                            </select>
                        }

                        {!loading &&
                        
                        <select className="form-control" onChange={ev => setUser({...user, role_id: ev.target.value})}>
                            {roles.map(role => (
                               
                                <option key={role.id} value={role.id}>{role.name}</option>
                    
                            ))}
                        </select>
                        
                        }
                      
                </div>
                <div className="col-md-12">
                    <button className="btn btn-primary">Register</button>
                </div>
            </div>
        </form>

    </div>
  )
}

export default RegisterForm
