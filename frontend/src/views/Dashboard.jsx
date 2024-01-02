import React, { useEffect, useState } from 'react'
import StatusTable from '../components/StatusTable'
import StripedTable from '../components/StripedTable'
import axiosClient from "../axios-client.jsx";

function Dashboard() {

  const [users, setUser] = useState([]);
  const [students, setStudent] = useState([]);
  const [subjects, setSubject] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {   
    getUsers();  
    getStudents();
    getSubjects();
    getAttendance();
  }, []);

  const getStudents = () => {
    setLoading(true)
    axiosClient.get('/students')
      .then(({ data }) => {
        setStudent(data.data)
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

  const getAttendance = () => {
    setLoading(true)
    axiosClient.get('/attendances')
      .then(({ data }) => {
        setAttendance(data.data)
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

  const getSubjects = () => {
    setLoading(true)
    axiosClient.get('/lectures')
      .then(({ data }) => {
        setSubject(data.data)
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

  const admins =  users.filter(user => user.role == 'admin')
  const tutors =  users.filter(user => user.role == 'tutor')
  const leave = attendance.filter(att => att.status == 'Leave')


  const avatar = new URL('../assets/images/Angular_Icon.png', import.meta.url).href

  return (
    <div className="main-content">
      <div className="breadcrumb" style={{ background: '#020381' }}>
        <h1 className="me-2 text-white">Dashboard</h1>
        <ul>
          {/* <li><a href="" className="text-white">Dashboard</a></li> */}
        </ul>
      </div>
      <div className="separator-breadcrumb border-top"></div>
                
        <div className="row">
                  <div className="col-lg-6 col-md-12">
                        
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-icon mb-4">
                                    <div className="card-body text-center"><i className="i-Data-Upload"></i>
                                        <p className="text-muted mt-2 mb-2">Total Subjects</p>
                                        <p className="text-primary text-24 line-height-1 m-0">{ subjects.length }</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-icon mb-4">
                                    <div className="card-body text-center"><i className="i-Add-User"></i>
                                        <p className="text-muted mt-2 mb-2">Total Students</p>
                                        <p className="text-primary text-24 line-height-1 m-0">{ students.length }</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-icon mb-4">
                                    <div className="card-body text-center"><i className="i-Add-User"></i>
                                        <p className="text-muted mt-2 mb-2">Total Users</p>
                                        <p className="text-primary text-24 line-height-1 m-0">{ users.length }</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-icon-big mb-4">
                                    <div className="card-body text-center"><i className="i-Add-User"></i>
                                      <p className="text-muted mt-2 mb-2">Total Tutors</p>
                                      <p className="text-primary text-title text-18 mt-2 mb-0">{ tutors.length }</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-icon-big mb-4">
                                    <div className="card-body text-center"><i className="i-Add-User"></i>
                                      <p className="text-muted mt-2 mb-2">Total Admins</p>
                                      <p className="line-height-1 text-title text-18 mt-2 mb-0">{ admins.length }</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-icon-big mb-4">
                                    <div className="card-body text-center"><i className="i-Bell"></i>
                                        <p className="line-height-1 text-title text-18 mt-2 mb-0">4021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="card mb-2">
                        <div className="card-body">
                          <div className="card-title">Last Month Summary</div>
                            <div className="row">
                              <div className="col-md-6">
                                <table className="table">
                                  <thead className="table-light">
                                    <tr>
                                      <th scope="col">Item</th>
                                      <th scope="col">Status</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Portable Speaker</td>
                                      <td className="fw-bold text-success">+ $1200</td>
                                    </tr>
                                    <tr>
                                      <td>Portable Headphone</td>
                                      <td className="fw-bold">In Stock</td>
                                    </tr>
                                    <tr>
                                      <td>Speaker</td>
                                      <td className="text-danger">Out of stock</td>
                                    </tr>
                                    <tr>
                                      <td>Watch</td>
                                      <td className="text-warning fw-bold">Low stock</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="col-md-6">
                                <div id="echart5" style={{ height: 200}}></div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  

            <div className="row">

                <div className="col-lg-6 col-md-6">
                  <div className="card mb-4">
                    <div className="card-body">
                    <div className="card-title">Super Admins and Admins</div>
                      <div className="d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3"><img className="avatar-md rounded me-3" src={ avatar } alt="" />
                        <div className="flex-grow-1">
                          <h6 className="m-0">David Hopkins</h6>
                          <p className="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                          <button className="btn btn-outline-primary btn-rounded btn-sm">Follow</button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3"><img className="avatar-md rounded me-3" src={ avatar } alt="" />
                        <div className="flex-grow-1">
                          <h6 className="m-0">James Mitchell</h6>
                          <p className="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                          <button className="btn btn-outline-primary btn-rounded btn-sm">Follow</button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3"><img className="avatar-md rounded me-3" src={ avatar } alt="" />
                        <div className="flex-grow-1">
                          <h6 className="m-0">Jessica Mitchell</h6>
                          <p className="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                      <div>
                        <button className="btn btn-outline-primary btn-rounded btn-sm">Follow</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                  <div className="card mb-4">
                    <div className="card-body">
                    <div className="card-title">Tutors</div>
                      <div className="d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3"><img className="avatar-md rounded me-3" src={ avatar } alt="" />
                        <div className="flex-grow-1">
                          <h6 className="m-0">David Hopkins</h6>
                          <p className="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                          <button className="btn btn-outline-primary btn-rounded btn-sm">Follow</button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3"><img className="avatar-md rounded me-3" src={ avatar } alt="" />
                        <div className="flex-grow-1">
                          <h6 className="m-0">James Mitchell</h6>
                          <p className="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                          <button className="btn btn-outline-primary btn-rounded btn-sm">Follow</button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3"><img className="avatar-md rounded me-3" src={ avatar } alt="" />
                        <div className="flex-grow-1">
                          <h6 className="m-0">Jessica Mitchell</h6>
                          <p className="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                      <div>
                        <button className="btn btn-outline-primary btn-rounded btn-sm">Follow</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>  
               
            <div className="row">
                  
              <StatusTable leave={leave} />
                    
              <StatusTable />

            </div> 
    </div>
  )
}

export default Dashboard
