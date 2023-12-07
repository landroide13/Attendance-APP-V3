import React, { useState, useEffect } from 'react'
import {useStateContext} from "../context/ContextProvider.jsx";
import axiosClient from "../axios-client.jsx";

function ListHours() {

    const [hrs, setHrs] = useState([])
    const [users, setUser] = useState([])
    const [option, setOption] = useState('')
    const [role, setRole] = useState('')

    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()

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

    const getHours = () => {
        setLoading(true)
        axiosClient.get('/hours')
          .then(({ data }) => {
            setHrs(data.data)
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
        getUsers();
        getHours();
    }, []) 


    const filtered =  hrs.filter(hrs => hrs.user_id == option)

    const filteredUser =  users.filter(user => user.role == 'tutor')

  return (
    <div className="col-lg-12 col-md-12 col-xl-10 mb-2">

        <div className="ul-widget__head pb-20 v-margin">  
            <div className="ul-widget__head-label">
                <h3 className="ul-widget__head-title">List Hours By Tutor: <span className='text-success'> { option } </span></h3>
            </div>
            <button className="btn btn-info dropdown-toggle _r_btn border-0" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
            <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', top: 0, left: 0 }}>
                <a  className="dropdown-item ul-widget__link--font text-success"  onClick={() => setOption('All')}>All</a>
            { filteredUser.map(user => (
                <a key={user.id} className="dropdown-item ul-widget__link--font text-success"  onClick={() => setOption(user.id)}>{ user.first_name } { user.last_name }</a>
              ))
            }
               
            </div>
        </div>
        <div className="ul-widget__body">
            <div className="ul-widget1">  

                <table className="table table-striped dataTable-collapse text-center">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Hours</th>
                        </tr>
                    </thead>

                    <tbody>

                    { option == 'All' ? hrs.map(hr => (
                        <tr>
                            <td scope="col">{ new Date(hr.date).getDate() }/{  new Date(hr.date).getMonth() + 1}/{  new Date(hr.date).getFullYear()}</td>
                            <td scope="col"> { hr.hours }</td>
                        </tr>
                        )) :

                        filtered.map(hrs => (
                        <tr>
                            <td scope="col">{ new Date(hrs.date).getDate() }/{  new Date(hrs.date).getMonth() + 1}/{  new Date(hrs.date).getFullYear()}</td>
                            <td scope="col"> { hrs.hours }</td>
                        </tr>
                        )) 
                
                    }
                    </tbody>
                </table>

            </div>
        </div>                     
                    
    </div>      
  )
}

export default ListHours