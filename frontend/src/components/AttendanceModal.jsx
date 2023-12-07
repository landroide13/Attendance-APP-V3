import React, { useState, useEffect, useParams } from 'react'
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

function AttendanceModal({ open, onClose, attendance }) {

    if (!open) return null;

    //let { id } = useParams();

    const styles = {
        main: {
            backgroundColor: '#fefefe',
            width: "30%",
            position: "fixed",
            top: '9em',
            left: '29em',  
            height: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
        },
        inputText: {
          padding: "10px",
          color: "red",
        },
    };

    const handleEdit = () => {
        ev.preventDefault()
        axiosClient.put('/attendance/', user) 
        .then(() => {
          console.log(user)
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

  return (
    <div class="card" style={{ ...styles.main }}>
        
        <div class="card-body">

            <h5>Change Status { attendance.id } </h5>

            <form onSubmit={handleEdit}>
                <div class="mb-3">
                    <label class="form-label">Date</label>
                    <input type="text" value={attendance.date} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Status</label>
                    <input type="text" value={attendance.status} class="form-control" id="exampleInputPassword1" />
                </div>
                
                <div className="">
                    <button type="submit" class="btn btn-primary">Edit</button>
                    <a href="#" class="btn btn-danger ml-5 mt-7" onClick={onClose}>Close</a>
                </div>

            </form>

        </div>

    </div>
  )
}

export default AttendanceModal