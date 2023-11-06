import React from 'react'
import List from '../components/List'
import RegisterForm from '../components/RegisterForm'

function ManageUsers() {
    

  return (
    <div className="col-lg-8 col-md-6 col-xl-8 offset-md-2 mt-2 mb-2">
        <div className="card">
            <div className="card-body">
                <div className="ul-widget__head">
                    <div className="ul-widget__head-label">
                        <h2 className="ul-widget__head-title">Users Zone</h2>
                    </div>
                    <div className="ul-widget__head-toolbar">
                        <ul className="nav nav-tabs nav-tabs-line nav-tabs-bold ul-widget-nav-tabs-line ul-widget-nav-tabs-line" role="tablist">
                            <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#ul-widget2-tab1-content" role="tab">Create User</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#ul-widget2-tab2-content" role="tab">List Users</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#ul-widget2-tab3-content" role="tab">List Students</a></li>
                        </ul>
                    </div>
                </div>
                <div className="ul-widget__body">
                    <div className="tab-content">
                        <div className="tab-pane active" id="ul-widget2-tab1-content">

                            <RegisterForm />

                        </div>
                            
                        <div className="tab-pane" id="ul-widget2-tab2-content">

                            <List />                            

                        </div>
                                                
                        <div className="tab-pane" id="ul-widget2-tab3-content">

                            <List />   
                            
                        </div>
                                                    
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ManageUsers
