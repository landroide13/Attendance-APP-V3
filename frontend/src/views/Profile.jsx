import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axiosClient from "../axios-client.jsx";
import ProfileCard from '../components/ProfileCard.jsx';

function Profile() {

    const [student, setStudent] = useState({});
    const [lectureTutors, setLectureTutors] = useState([]);
    const [loading, setLoading] = useState(false);

    let {id} = useParams();
  
    if (id) {
        useEffect(() => {  
          setLoading(true)
          axiosClient.get(`/students/${id}`)
            .then(({data}) => {
              setStudent(data.data)
              //console.log(data.data)
              setLoading(false)
            })
            .catch(() => {
              setLoading(false)
            })
        }, [])
      }

    const avatar = new URL('../assets/images/fallback-avatar.jpg', import.meta.url).href

    const pic1 = new URL('../assets/images/photo-wide-1.jpg', import.meta.url).href

    const pic2 = new URL('../assets/images/photo-wide-2.jpg', import.meta.url).href


    const { lectures } = student

    //console.log( lectures )

  return (
    <div className="main-content ">
        <div className="breadcrumb">
            <h1>{ student.first_name }'s Profiles</h1>
            <ul>
            </ul>
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
                        
                        <ProfileCard lecture={subject} />  
                                            
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