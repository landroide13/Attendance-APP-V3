import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

function RegisterForm() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        id: null,
        first_name: '', 
        last_name:'',  
        email: '',
        phone: '',
        password: '',
        role_id:'',
        password_confirmation: '',
        gender: ''
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
          console.log(user)
          navigate('/dashboard')
          window.confirm("User was successfully created")
          setNotification('User was successfully created')
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
                    <input className="form-control" value={user.first_name}  onChange={ev => setUser({...user, first_name: ev.target.value})} id="firstName1" type="text" placeholder="Enter your first name" required />
                </div>
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="lastName1">Last name</label>
                    <input className="form-control" value={user.last_name}  onChange={ev => setUser({...user, last_name: ev.target.value})} id="lastName1" type="text" placeholder="Enter your last name" required/>
                </div>
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input className="form-control" value={user.email}  onChange={ev => setUser({...user, email: ev.target.value})} id="exampleInputEmail1" type="email" placeholder="Enter email" required/>     
                </div>
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="exampleInputEmail1">Password</label>
                    <input className="form-control" value={user.password}  onChange={ev => setUser({...user, password: ev.target.value})} id="exampleInputEmail1" type="password" placeholder="Password" required/>     
                </div>
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="exampleInputEmail1">Password Confirmation</label>
                    <input className="form-control" value={user.password_confirmation}  onChange={ev => setUser({...user, password_confirmation: ev.target.value})} id="exampleInputEmail1" type="password" placeholder="Password Confirmation" required/>     
                </div>
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="phone">Phone</label>
                    <input className="form-control" value={user.phone}  onChange={ev => setUser({...user, phone: ev.target.value})} id="phone" placeholder="Enter phone" />
                </div>
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="picker2">Gender</label>
                    <select className="form-control" value={user.gender}  onChange={ev => setUser({...user, gender: ev.target.value})} id="gender" placeholder="Enter Gender">
                      <option>...</option>
                      <option value={'male'}>Male</option>
                      <option value={'female'}>Female</option>
                    </select>
                </div>

                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="picker1">Role</label>
                    
                        {loading && 
                            <select className="form-control">
                                <option>...</option>
                            </select>
                        }

                        {!loading &&
                        
                        <select className="form-control"  onChange={ev => setUser({...user, role_id: ev.target.value})}> 
                            <option>...</option>
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
