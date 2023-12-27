import React from 'react'
import ResgisterStudent from '../components/ResgisterStudent'
import ListStudent from '../components/ListStudent'
import EnrolStudent from '../components/EnrolStudent'

function ManageStudents() {

    
  return (
    <div className="col-lg-8 col-md-6 col-xl-8 offset-md-2">
        <div className="card">
            <div className="card-body">
                <div className="ul-widget__head">
                    <div className="ul-widget__head-label">
                        <h3 className="ul-widget__head-title">Students Zone</h3>
                    </div>
                    <div className="ul-widget__head-toolbar">
                        <ul className="nav nav-tabs nav-tabs-line nav-tabs-bold ul-widget-nav-tabs-line ul-widget-nav-tabs-line" role="tablist">
                            <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#ul-widget2-tab1-content" role="tab">Register Student</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#ul-widget2-tab2-content" role="tab">List Student</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#ul-widget2-tab3-content" role="tab">Enrol Student</a></li>
                        </ul>
                    </div>
                </div>
                <div className="ul-widget__body">
                    <div className="tab-content">
                        <div className="tab-pane active" id="ul-widget2-tab1-content">

                            <ResgisterStudent />         

                        </div>  
                            
                        <div className="tab-pane" id="ul-widget2-tab2-content">
                            <ListStudent />        
                        </div>
                                                
                        <div className="tab-pane" id="ul-widget2-tab3-content">

                          <EnrolStudent />        

                        </div>
                                                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManageStudents
