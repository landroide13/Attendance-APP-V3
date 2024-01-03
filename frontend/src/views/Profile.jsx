import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axiosClient from "../axios-client.jsx";
import ProfileCard from '../components/ProfileCard.jsx';
import {useStateContext} from "../context/ContextProvider.jsx";
import { useNavigate } from "react-router-dom"

function Profile() {

    const [student, setStudent] = useState({});
    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()

    let {id} = useParams();
    const navigate = useNavigate();
  
    if (id) {
        useEffect(() => {  
          setLoading(true)
          axiosClient.get(`/students/${id}`)
            .then(({data}) => {
              setStudent(data.data)
              setLoading(false)
            })
            .catch(() => {
              setLoading(false)
            })
        }, [])
    }

     const handleDelete = id => {
      axiosClient.delete(`/students/${id}`)
        .then(() => {
          setLoading(false)
          setNotification('Student deleted' + ' ' + id)
          navigate('/manageStudents')
        })
        .catch(() => {
          const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
        setLoading(false)
      }) 
    }



    const avatar = new URL('../assets/images/fallback-avatar.jpg', import.meta.url).href

    const pic1 = new URL('../assets/images/photo-wide-1.jpg', import.meta.url).href

    const pic2 = new URL('../assets/images/photo-wide-2.jpg', import.meta.url).href

    const { lectures } = student

  return (
    <div className="main-content ">
        <div className="breadcrumb">
            <h1>{ student.first_name }'s Profiles</h1>
            <ul>
            </ul>
            <button className="btn btn-danger ml-5" onClick={() => handleDelete(student.id)}  type="button">Delete</button>
        </div>
        <div className="separator-breadcrumb border-top"></div>
        <div className="card user-profile o-hidden mb-4">
            <div className="header-cover" style={{ backgroundColor: 'blue', backgroundImage: { pic1 } }} >
                {/* <img className=" avatar-lg mb-2" src={ pic1 } alt="" /> */}
            </div>
            <div className="user-info"><img className="profile-picture avatar-lg mb-2" src={ avatar } alt="" />
                <p className="m-0 text-24">{ student.first_name } { student.last_name }</p>
                <p className="text-muted m-0">Student</p>
            </div>
            <div className="card-body">
                <ul className="nav nav-tabs profile-nav mb-4" id="profileTab" role="tablist">
                    <li className="nav-item"><a className="nav-link active" id="timeline-tab" data-bs-toggle="tab" href="#timeline" role="tab" aria-controls="timeline" aria-selected="false">Subjects</a></li>
                    <li className="nav-item"><a className="nav-link" id="about-tab" data-bs-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="true">Contact Detail</a></li>
                </ul>
                <div className="tab-content" id="profileTabContent">
                    <div className="tab-pane fade active show" id="timeline" role="tabpanel" aria-labelledby="timeline-tab">
                        
                      { lectures && lectures.map(subject => (
                        
                        <ProfileCard key={subject.id} lecture={subject} />  
                                            
                      ))}
                    </div>

                    <div className="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">
                        <h4>Personal Information</h4>
                        <hr />
                                <div className="row">
                                    <div className="col-md-4 col-6">
                                    <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-MaleFemale text-16 me-1"></i>Parent 1 phone</p><span>{ student.parent_phone }</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-MaleFemale text-16 me-1"></i>Parent 1 Email</p><span>{ student.parent_email }</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-MaleFemale text-16 me-1"></i>Gender</p><span>{ student.gender }</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-MaleFemale text-16 me-1"></i>Birth Date</p><span>{ student.birth_date }</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-MaleFemale text-16 me-1"></i>School Thoughts</p><span>{ student.school_thoughts }</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-MaleFemale text-16 me-1"></i>Student Studying</p><span>{ student.student_studying }</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-MaleFemale text-16 me-1"></i>Aditional Info</p><span>{ student.aditional_info }</span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-MaleFemale text-16 me-1"></i>Parent 2 phone</p><span>{ student.parent_phone }</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-MaleFemale text-16 me-1"></i>Parent 2 Email</p><span>{ student.parent_email }</span>
                                        </div>
                                    </div>
    
                                </div>
                            <hr />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile