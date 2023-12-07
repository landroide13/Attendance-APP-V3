import React, { useState, useEffect } from 'react'
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

function HoursForm() {

    const [tutorHours, setTutorHrs] = useState({
      user_id: '', 
      date: '',
      hours: ''
    })

    const today = new Date();


    const [users, setUser] = useState([])
    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()

    const [option, setOption] = useState('tutor');

    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/users')
          .then(({ data }) => {
            setUser(data.data)
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

    useEffect(() => {
        getUsers()
    }, [])   


    const handleSubmit = ev => {
      ev.preventDefault()

      let checkDate = new Date(tutorHours.date)

    if (checkDate.getTime() > today.getTime()) {
      window.confirm("The given date is in the futre, action not allow.")
      console.log('The given date is in the future.');
      return
    }
    console.log(tutorHours)
    axiosClient.post('/tutorHours', tutorHours) 
    .then(() => {
      console.log(tutorHours)
      navigate('/dashboard')
      window.confirm("User was successfully created")
      //setNotification('User was successfully created')
    })
    .catch(err => {
      const response = err.response;
      if (response && response.status === 422) {
        setErrors(response.data.errors)
      }
    })

    }

    const filtered =  users.filter(user => user.role == option)

  return (
    <form className='' onSubmit={handleSubmit}>

        <div className="col-md-6 form-group mb-5">
            <label htmlFor="picker1">Select Tutor</label>
            <select className="form-control"  onChange={ev => setTutorHrs({...tutorHours, user_id: ev.target.value})}>
                <option>...</option>
                {  filtered.map(user => (
                    <option key={user.id} value={user.id}>{ user.first_name } { user.last_name }</option>
                ))}
            </select>
        </div>    

        <div className="d-flex flex-row">
            <div className="col-md-2">
                <label htmlFor="exampleFormControlInput1" className="form-label">Hours</label>
                <input type="number" step="0.01" className="form-control" id="exampleFormControlInput1" onChange={ev => setTutorHrs({...tutorHours, hours: ev.target.value})} placeholder="Hours" />
            </div>

            <div className="col-md-6">
                <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
                <input type="date" className="form-control" id="exampleFormControlInput1" onChange={ev => setTutorHrs({...tutorHours, date: ev.target.value})} placeholder="Date" />
            </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3 ml-3">Save</button>

    </form>
  )
}

export default HoursForm