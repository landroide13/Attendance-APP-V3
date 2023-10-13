
function App() {

  const img = new URL('./assets/images/madarsa_logo.jpg', import.meta.url).href

  return (
  
<div className="text-start">
      <div className="app-admin-wrap layout-horizontal-bar">
        <div className="main-header bg-primary" style={{ height: 90}}>
            <div className="logo"><img src={ img } style={{ width: 85, height: 85}} /></div>
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
            <div></div>
            <div className="header-part-right">
                
                <div className="dropdown"><i className="i-Safe-Box text-muted header-icon text-white-50" id="dropdownMenuButton" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="menu-icon-grid" ><a href="#"><i className="i-Shop-4"></i> Home</a><a href="#"><i className="i-Library"></i> UI Kits</a><a href="#"><i className="i-Drop"></i> Apps</a><a href="#"><i className="i-File-Clipboard-File--Text"></i> Forms</a><a href="#"><i className="i-Checked-User"></i> Sessions</a><a href="#"><i className="i-Ambulance"></i> Support</a></div>
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
                            <div className="notification-icon"><i className="i-Receipt-3 text-success me-1"></i></div>
                            <div className="notification-details flex-grow-1">
                                <p className="m-0 d-flex align-items-center"><span>New order received</span><span className="badge rounded-pill text-bg-success ms-1 me-1">new</span><span className="flex-grow-1"></span><span className="text-small text-muted ms-auto">2 hours ago</span></p>
                                <p className="text-small text-muted m-0">1 Headphone, 3 iPhone x</p>
                            </div>
                        </div>
                        <div className="dropdown-item d-flex">
                            <div className="notification-icon"><i className="i-Empty-Box text-danger me-1"></i></div>
                            <div className="notification-details flex-grow-1">
                                <p className="m-0 d-flex align-items-center"><span>Product out of stock</span><span className="badge rounded-pill text-bg-danger ms-1 me-1">3</span><span className="flex-grow-1"></span><span className="text-small text-muted ms-auto">10 hours ago</span></p>
                                <p className="text-small text-muted m-0">Headphone E67, R98, XL90, Q77</p>
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
            <div className="header-topnav mt-2" style={{ height: 55}}>
              <div className="container-fluid">
                <div className="topnav rtl-ps-none" id="" data-perfect-scrollbar="" data-suppress-scroll-x="true">
                  <ul className="menu float-start">
                          
                    <li>
                      <div>
                        <div>
                          <label className="toggle" >Dashboard</label><a href="#" className='text-blue-900'> Dashboard</a>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div>
                        <div>
                          <label className="toggle" htmlFor="drop-2">UI kits</label><a href="#"> UI kits</a>
                        </div>
                      </div>
                    </li>
                           
                    <li>
                      <div>
                        <div>
                          <label className="toggle" htmlFor="drop-2">Extra UI kits</label><a href="#"> Extra UI kits</a>
                        </div>
                      </div>
                    </li>
                            
                    <li>
                      <div>
                        <div>
                          <label className="toggle" htmlFor="drop-2">Apps</label><a href="#"> Apps</a>
                        </div>
                      </div>
                    </li>
                           
                    <li>
                      <div>
                        <div>
                          <label className="toggle" htmlFor="drop-2">Forms</label><a href="#"> Logout</a>
                        </div>
                      </div>
                    </li>       
              </ul>
            </div>
          </div>
        </div>
      </div>
        
        <div className="main-content-wrap d-flex flex-column">
           
            <div className="main-content">
                <div className="breadcrumb">
                    <h1 className="me-2 ">Madrasahtul Islamiyah</h1>
                    <ul>
                      <li><a href="">Dashboard</a></li>
                    </ul>
                </div>
                <div className="separator-breadcrumb border-top"></div>
                
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                        
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-icon mb-4">
                                    <div className="card-body text-center"><i className="i-Data-Upload"></i>
                                        <p className="text-muted mt-2 mb-2">Today&apos;s Upload</p>
                                        <p className="text-primary text-24 line-height-1 m-0">21</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-icon mb-4">
                                    <div className="card-body text-center"><i className="i-Add-User"></i>
                                        <p className="text-muted mt-2 mb-2">New Users</p>
                                        <p className="text-primary text-24 line-height-1 m-0">21</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-icon mb-4">
                                    <div className="card-body text-center"><i className="i-Money-2"></i>
                                        <p className="text-muted mt-2 mb-2">Total sales</p>
                                        <p className="text-primary text-24 line-height-1 m-0">4021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-icon-big mb-4">
                                    <div className="card-body text-center"><i className="i-Money-2"></i>
                                        <p className="line-height-1 text-title text-18 mt-2 mb-0">4021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-icon-big mb-4">
                                    <div className="card-body text-center"><i className="i-Gear"></i>
                                        <p className="line-height-1 text-title text-18 mt-2 mb-0">4021</p>
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
                    <div className="card-title">Top Authors</div>
                      <div className="d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3"><img className="avatar-md rounded me-3" src="#" alt="" />
                        <div className="flex-grow-1">
                          <h6 className="m-0">David Hopkins</h6>
                          <p className="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                          <button className="btn btn-outline-primary btn-rounded btn-sm">Follow</button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3"><img className="avatar-md rounded me-3" src="#" alt="" />
                        <div className="flex-grow-1">
                          <h6 className="m-0">James Mitchell</h6>
                          <p className="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                          <button className="btn btn-outline-primary btn-rounded btn-sm">Follow</button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3"><img className="avatar-md rounded me-3" src="#" alt="" />
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
                    <div className="card-title">Top Authors</div>
                      <div className="d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3"><img className="avatar-md rounded me-3" src="#" alt="" />
                        <div className="flex-grow-1">
                          <h6 className="m-0">David Hopkins</h6>
                          <p className="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                          <button className="btn btn-outline-primary btn-rounded btn-sm">Follow</button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3"><img className="avatar-md rounded me-3" src="#" alt="" />
                        <div className="flex-grow-1">
                          <h6 className="m-0">James Mitchell</h6>
                          <p className="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                          <button className="btn btn-outline-primary btn-rounded btn-sm">Follow</button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3"><img className="avatar-md rounded me-3" src="#" alt="" />
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
                    <div className="col-md-6">
                        <div className="card o-hidden mb-4">
                            <div className="card-header d-flex align-items-center">
                                <h3 className="w-50 float-start card-title m-0">New Users</h3>
                                <div className="dropdown dropleft text-end w-50 float-end">
                                    <button className="btn bg-gray-100" id="dropdownMenuButton_table1" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="nav-icon i-Gear-2"></i></button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton_table1"><a className="dropdown-item" href="#">Add new user</a><a className="dropdown-item" href="#">View All users</a><a className="dropdown-item" href="#">Something else here</a></div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table dataTable-collapse text-center" id="user_table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Avatar</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Smith</td>
                                                <td><img className="rounded-circle m-0 avatar-sm-table" src="#" alt="" /></td>
                                                <td>Smith@gmail.com</td>
                                                <td><span className="badge bg-success">Active</span></td>
                                                <td><a className="text-success me-2" href="#"><i className="nav-icon i-Pen-2 fw-bold"></i></a><a className="text-danger me-2" href="#"><i className="nav-icon i-Close-Window fw-bold"></i></a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jhon Doe</td>
                                                <td><img className="rounded-circle m-0 avatar-sm-table" src="#" alt="" /></td>
                                                <td>Jhon@gmail.com</td>
                                                <td><span className="badge bg-info">Pending</span></td>
                                                <td><a className="text-success me-2" href="#"><i className="nav-icon i-Pen-2 fw-bold"></i></a><a className="text-danger me-2" href="#"><i className="nav-icon i-Close-Window fw-bold"></i></a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Alex</td>
                                                <td><img className="rounded-circle m-0 avatar-sm-table" src="#" alt="" /></td>
                                                <td>Otto@gmail.com</td>
                                                <td><span className="badge bg-warning">Not Active</span></td>
                                                <td><a className="text-success me-2" href="#"><i className="nav-icon i-Pen-2 fw-bold"></i></a><a className="text-danger me-2" href="#"><i className="nav-icon i-Close-Window fw-bold"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="card o-hidden mb-4">
                            <div className="card-header d-flex align-items-center">
                                <h3 className="w-50 float-start card-title m-0">Total Sales</h3>
                                <div className="dropdown dropleft text-end w-50 float-end">
                                    <button className="btn bg-gray-100" id="dropdownMenuButton_table2" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="nav-icon i-Gear-2"></i></button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton_table2"><a className="dropdown-item" href="#">Add new user</a><a className="dropdown-item" href="#">View All users</a><a className="dropdown-item" href="#">Something else here</a></div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table dataTable-collapse text-center" id="sales_table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Watch</td>
                                                <td>12-10-2019</td>
                                                <td>$30</td>
                                                <td><span className="badge bg-success">Delivered</span></td>
                                                <td><a className="text-success me-2" href="#"><i className="nav-icon i-Pen-2 fw-bold"></i></a><a className="text-danger me-2" href="#"><i className="nav-icon i-Close-Window fw-bold"></i></a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Iphone</td>
                                                <td>23-10-2019</td>
                                                <td>$300</td>
                                                <td><span className="badge bg-info">Pending</span></td>
                                                <td><a className="text-success me-2" href="#"><i className="nav-icon i-Pen-2 fw-bold"></i></a><a className="text-danger me-2" href="#"><i className="nav-icon i-Close-Window fw-bold"></i></a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Watch</td>
                                                <td>12-10-2019</td>
                                                <td>$30</td>
                                                <td><span className="badge bg-warning">Not Delivered</span></td>
                                                <td><a className="text-success me-2" href="#"><i className="nav-icon i-Pen-2 fw-bold"></i></a><a className="text-danger me-2" href="#"><i className="nav-icon i-Close-Window fw-bold"></i></a></td>
                                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
              </div> 
            </div>

            <div className="flex-grow-1"></div>
            <div className="app-footer bg-primary">
              <div className="row">
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

    <div className="search-ui">
        <div className="search-header">
            <img src="#" alt="" className="logo"/>
            <button className="search-close btn btn-icon bg-transparent float-end mt-2">
                <i className="i-Close-Window text-22 text-muted"></i>
            </button>
        </div>
        <input type="text" placeholder="Type here" className="search-input" />
        <div className="search-title">
            <span className="text-muted">Search results</span>
        </div>
        <div className="search-results list-horizontal">
            <div className="list-item col-md-12 p-0">
                <div className="card o-hidden flex-row mb-4 d-flex">
                    <div className="list-thumb d-flex">
                        
                        <img src="#" alt=""/>
                    </div>
                    <div className="flex-grow-1 ps-2 d-flex">
                        <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                           
                            <a href="" className="w-40 w-sm-100">
                                <div className="item-title">Headphone 1</div>
                            </a>
                            <p className="m-0 text-muted text-small w-15 w-sm-100">Gadget</p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100">$300
                                <del className="text-secondary">$400</del>
                            </p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                                <span className="badge bg-danger">Sale</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list-item col-md-12 p-0">
                <div className="card o-hidden flex-row mb-4 d-flex">
                    <div className="list-thumb d-flex">
                       
                        <img src="#" alt=""/>
                    </div>
                    <div className="flex-grow-1 ps-2 d-flex">
                        <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                            
                            <a href="" className="w-40 w-sm-100">
                                <div className="item-title">Headphone 1</div>
                            </a>
                            <p className="m-0 text-muted text-small w-15 w-sm-100">Gadget</p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100">$300
                                <del className="text-secondary">$400</del>
                            </p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                                <span className="badge bg-primary">New</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list-item col-md-12 p-0">
                <div className="card o-hidden flex-row mb-4 d-flex">
                    <div className="list-thumb d-flex">
                        
                        <img src="#" alt=""/>
                    </div>
                    <div className="flex-grow-1 ps-2 d-flex">
                        <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                            
                            <a href="" className="w-40 w-sm-100">
                                <div className="item-title">Headphone 1</div>
                            </a>
                            <p className="m-0 text-muted text-small w-15 w-sm-100">Gadget</p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100">$300
                                <del className="text-secondary">$400</del>
                            </p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                                <span className="badge bg-primary">New</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list-item col-md-12 p-0">
                <div className="card o-hidden flex-row mb-4 d-flex">
                    <div className="list-thumb d-flex">
                       
                        <img src="#" alt=""/>
                    </div>
                    <div className="flex-grow-1 ps-2 d-flex">
                        <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                            
                            <a href="" className="w-40 w-sm-100">
                                <div className="item-title">Headphone 1</div>
                            </a>
                            <p className="m-0 text-muted text-small w-15 w-sm-100">Gadget</p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100">$300
                                <del className="text-secondary">$400</del>
                            </p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                                <span className="badge bg-primary">New</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="col-md-12 mt-5 text-center">
            <nav aria-label="Page navigation example">
                <ul className="pagination d-inline-flex">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

  </div>
      
  )
}

export default App
