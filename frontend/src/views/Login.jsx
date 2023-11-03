import React from 'react'

function Login() {

    const img = new URL('../assets/images/madarsa_logo.jpg', import.meta.url).href

  return (

    <div className="main-content-wrap d-flex flex-column">
        
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="card-title mb-3">
                            <div className="breadcrumb">
                                <div class="logo"><img src={ img } alt="" style={{ width: 50, height: 50}} /></div>
                                <h1 className='ml-3'>Login</h1>
                            </div>
                        </div>
                        <form>
                            <div className="col-md-8 form-group mb-3 offset-md-2">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input className="form-control" id="exampleInputEmail1" type="email" placeholder="Enter email" />
                            </div>
                                        
                            <div className="col-md-8 form-group mb-3 offset-md-2">
                                <label htmlFor="password">Password</label>
                                <input className="form-control" id="password" placeholder="Password" />
                            </div>
                                
                            <div className="col-md-8 offset-md-2">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
             </div>
        </div>
    </div>                

    )
}

export default Login
