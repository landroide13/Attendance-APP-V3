import React from 'react'

function Signup() {

    const img = new URL('../assets/images/madarsa_logo.jpg', import.meta.url).href

  return (
        <div className="row">
            <div className="col-md-12">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="card-title mb-3">
                            <div className="breadcrumb" style={{ background: '#FFCB70' }}>
                                <h1 className='text-white'>Register User</h1>
                            </div>
                        </div>
                            <form>
                                <div className="row">
                                    <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="firstName1">First name</label>
                                            <input className="form-control" id="firstName1" type="text" placeholder="Enter your first name" />
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="lastName1">Last name</label>
                                            <input className="form-control" id="lastName1" type="text" placeholder="Enter your last name" />
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input className="form-control" id="exampleInputEmail1" type="email" placeholder="Enter email" />
                                            
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="phone">Phone</label>
                                            <input className="form-control" id="phone" placeholder="Enter phone" />
                                        </div>
                                        
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="picker2">Birth date</label>
                                            <input type='date' className="form-control" id="picker2" placeholder="yyyy-mm-dd" name="dp" />
                                        </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label htmlFor="picker1">Select</label>
                                    <select className="form-control">
                                        <option>Admin</option>
                                        <option>Operations</option>
                                        <option>Tutors</option>
                                        <option>Student</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
                  
  )
}

export default Signup
