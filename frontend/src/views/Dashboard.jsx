import React from 'react'

function Dashboard() {
  return (
            <div className="main-content">
                <div className="breadcrumb" style={{ background: '#FFCB70' }}>
                    <h1 className="me-2 text-white">Madrasahtul Islamiyah</h1>
                    <ul>
                      <li><a href="" className="text-white">Dashboard</a></li>
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
                    <div className="card-title">Top Tutors</div>
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
                                <h3 className="w-50 float-start card-title m-0">New Students</h3>
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
  )
}

export default Dashboard
