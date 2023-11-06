import React from 'react'

function StatusTable() {
  return (
   
        <div className="col-md-6">
            <div className="card o-hidden mb-2">
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
                                    <td><span className="badge bg-success">Present</span></td>
                                    <td><a className="text-success me-2" href="#"><i className="nav-icon i-Pen-2 fw-bold"></i></a><a className="text-danger me-2" href="#"><i className="nav-icon i-Close-Window fw-bold"></i></a></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jhon Doe</td>
                                    <td><img className="rounded-circle m-0 avatar-sm-table" src="#" alt="" /></td>
                                    <td>Jhon@gmail.com</td>
                                    <td><span className="badge bg-warning">Leave</span></td>
                                    <td><a className="text-success me-2" href="#"><i className="nav-icon i-Pen-2 fw-bold"></i></a><a className="text-danger me-2" href="#"><i className="nav-icon i-Close-Window fw-bold"></i></a></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Alex</td>
                                    <td><img className="rounded-circle m-0 avatar-sm-table" src="#" alt="" /></td>
                                    <td>Otto@gmail.com</td>
                                    <td><span className="badge bg-warning">Leave</span></td>
                                    <td><a className="text-success me-2" href="#"><i className="nav-icon i-Pen-2 fw-bold"></i></a><a className="text-danger me-2" href="#"><i className="nav-icon i-Close-Window fw-bold"></i></a></td>           
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default StatusTable
