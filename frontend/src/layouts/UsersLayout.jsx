import React from 'react'
import { Outlet } from 'react-router-dom'

function UsersLayout() {

  const img = new URL('../assets/images/madarsa_logo.jpg', import.meta.url).href

  // <img src={ img } style={{ width: 85, height: 85}} />

  // className="logo"

  return (
    <div className="text-start">
      <div className="app-admin-wrap layout-horizontal-bar">
        <div className="main-header" style={{ height: 90, marginTop: -40, background: '#020381'}}>
            <div className='mr-5 ml-5'><h2 className="me-2 text-white">Madrasahtul Islamiyah</h2></div>
            <div className="menu-toggle">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="d-flex align-items-center">
               <div className="m-auto"></div>
                <div className="search-bar">
                    <input type="text" placeholder="Search" /><i className="search-icon text-muted i-Magnifi-Glass1"></i>
                </div>
            </div>
            <div style={{ margin: 'auto' }}></div>
            <div className="header-part-right">
                <div className="dropdown"><i className="i-Safe-Box text-muted header-icon text-white-50" id="dropdownMenuButton" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="menu-icon-grid text-gray-300" ><a href="#"><i className="i-Shop-4"></i> Home</a><a href="#"><i className="i-Library"></i> UI Kits</a><a href="#"><i className="i-Drop"></i> Apps</a><a href="#"><i className="i-File-Clipboard-File--Text"></i> Forms</a><a href="/profile"><i className="i-Checked-User"></i>Profile</a><a href="#"><i className="i-Ambulance"></i> Support</a></div>
                  </div>
                </div>
                
                <div className="dropdown">
                    <div className="badge-top-container" id="dropdownNotification" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="badge bg-primary">3</span><i className="i-Bell text-muted header-icon text-white-50"></i></div>
                    
                    <div className="dropdown-menu dropdown-menu-right notification-dropdown rtl-ps-none" aria-labelledby="dropdownNotification" data-perfect-scrollbar="" data-suppress-scroll-x="true">
                        <div className="dropdown-item d-flex">
                            <div className="notification-icon"><i className="i-Speach-Bubble-6 text-primary me-1"></i></div>
                            <div className="notification-details flex-grow-1">
                                <p className="m-0 d-flex align-items-center"><span>New message</span><span className="badge rounded-pill text-bg-primary ms-1 me-1">new</span><span className="flex-grow-1"></span><span className="text-small text-muted ms-auto">10 sec ago</span></p>
                                <p className="text-small text-muted m-0">James: Hey! are you busy?</p>
                            </div>
                        </div>
                        <div className="dropdown-item d-flex">
                            <div className="notification-icon"><i className="i-Data-Power text-success me-1"></i></div>
                            <div className="notification-details flex-grow-1">
                                <p className="m-0 d-flex align-items-center"><span>Server Up!</span><span className="badge rounded-pill text-bg-success ms-1 me-1">3</span><span className="flex-grow-1"></span><span className="text-small text-muted ms-auto">14 hours ago</span></p>
                                <p className="text-small text-muted m-0">Server rebooted successfully</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="dropdown">
                    <div className="user col align-self-end"><img id="userDropdown" src="#" alt="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <div className="dropdown-header"><i className="i-Lock-User me-1"></i> Timothy Carlson</div><a className="dropdown-item">Account settings</a><a className="dropdown-item">Billing history</a><a className="dropdown-item" href="signin.html">Sign out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="horizontal-bar-wrap">
            <div className="header-topnav" style={{ background: 'white' }}>
              <div className="container-fluid">
                <div className="topnav rtl-ps-none" id="" data-perfect-scrollbar="" data-suppress-scroll-x="true">
                  <ul className="menu float-start">
                          
                    <li>
                      <div>
                        <div>
                          <label className="toggle text-white"></label><a href="/dashboard" className='text-white'>Dashboard</a>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div>
                        <div>
                          <label className="toggle" htmlFor="drop-2"></label><a href="/manageUsers"> Manage Users</a>
                        </div>
                      </div>
                    </li>
                           
                    <li>
                      <div>
                        <div>
                          <label className="toggle" htmlFor="drop-2"></label><a href="/manageStudents">Manage Students</a>
                        </div>
                      </div>
                    </li>
                            
                    <li>
                      <div>
                        <div>
                          <label className="toggle" htmlFor="drop-2"></label><a href="#"> Manage enrolments</a>
                        </div>
                      </div>
                    </li>
                           
                    <li>
                      <div>
                        <div>
                          <label className="toggle" htmlFor="drop-2"></label><a href="/attendance">Manage Attendance</a>
                        </div>
                      </div>
                    </li>       
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content-wrap d-flex flex-column">  
          <Outlet />
        </div>

      <div className="flex-grow-1"></div>
            <div className="app-footer text-white" style={{ background: '#020381' }}>
              <div className="row py-3">
                <div className="col-md-9">
                  <p><strong>Madrasahtul Islamiyah</strong></p>
                  <p></p>
                </div>
              </div>
              <div className="footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center">
                <span className="flex-grow-1"></span>
                <div className="d-flex align-items-center">
                  <img className="logo" src="#" alt=""/>
                <div>
                <p className="m-0">&copy; 2023 Eltro</p>
                <p className="m-0">All rights reserved</p>
              </div>
            </div>
          </div>
      </div>
    </div>  
  </div>
  )
}

export default UsersLayout
