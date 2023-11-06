import React from 'react'

function StripedTable() {
  return (
    <div className="col-md-6 mb-2">
        <div className="card text-start">
            <div className="card-body">
                <h4 className="card-title mb-3">Students by Status</h4>
                <div className="table-responsive">
                    <table className="table table-striped">
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
                                <td>Smith Doe</td>
                                <td><img className="rounded-circle m-0 avatar-sm-table" src="../../dist-assets/images/faces/1.jpg" alt="" /></td>
                                <td>Smith@gmail.com</td>
                                <td><span className="badge bg-success">Present</span></td>
                                <td><a className="text-success me-2" href="#"><i className="nav-icon i-Pen-2 fw-bold"></i></a><a className="text-danger me-2" href="#"><i className="nav-icon i-Close-Window fw-bold"></i></a></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jhon Doe</td>
                                <td><img className="rounded-circle m-0 avatar-sm-table" src="../../dist-assets/images/faces/1.jpg" alt="" /></td>
                                <td>Jhon@gmail.com</td>
                                <td><span className="badge bg-info">Present</span></td>
                                <td><a className="text-success me-2" href="#"><i className="nav-icon i-Pen-2 fw-bold"></i></a><a className="text-danger me-2" href="#"><i className="nav-icon i-Close-Window fw-bold"></i></a></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Alex</td>
                                <td><img className="rounded-circle m-0 avatar-sm-table" src="../../dist-assets/images/faces/1.jpg" alt="" /></td>
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

export default StripedTable
