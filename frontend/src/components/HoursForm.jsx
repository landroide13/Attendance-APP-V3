import React, { useState, useEffect } from 'react'
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

function HoursForm() {

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

    const filtered =  users.filter(user => user.role == option)

  return (
    <form className=''>

        <div className="col-md-6 form-group mb-5">
            <label htmlFor="picker1">Select Tutor</label>
            <select className="form-control"  onChange={ev => setEnrol({...enrol, student_id: ev.target.value})}>
                <option>...</option>
                {  filtered.map(user => (
                    <option value={user.id}>{ user.first_name } { user.last_name }</option>
                ))}
            </select>
        </div>    

        <div className="d-flex flex-row">
            <div className="col-md-2">
                <label htmlFor="exampleFormControlInput1" className="form-label">Hours</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>

            <div className="col-md-6">
                <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
                <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
        </div>

        <button type="button" className="btn btn-primary mt-3 ml-3">Save</button>

    </form>
  )
}

export default HoursForm