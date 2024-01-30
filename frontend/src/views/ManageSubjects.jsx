import React from 'react'
import RegisterSubject from '../components/RegisterSubject'
import ListSubjects from '../components/ListSubjects'
import AttendanceList from '../components/AttendanceList'
import AssignSubject from '../components/AssignSubject'

function ManageSubjects() {


  return (
    <div className="col-lg-8 col-md-8 col-xl-8 offset-md-2 mb-3">
        <div className="card">
            <div className="card-body">
                <div className="ul-widget__head">
                    <div className="ul-widget__head-label">
                        <h3 className="ul-widget__head-title">Subjects Zone</h3>
                    </div>
                    <div className="ul-widget__head-toolbar">
                        <ul className="nav nav-tabs nav-tabs-line nav-tabs-bold ul-widget-nav-tabs-line ul-widget-nav-tabs-line" role="tablist">
                            <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#ul-widget2-tab1-content" role="tab">Create Subject</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#ul-widget2-tab2-content" role="tab">List Subject</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#ul-widget2-tab3-content" role="tab">Assign Subject</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#ul-widget2-tab4-content" role="tab">Attendance Lists</a></li>
                        </ul>
                    </div>  
                </div>
                <div className="ul-widget__body">  
                    <div className="tab-content">
                        <div className="tab-pane active" id="ul-widget2-tab1-content">
                            <RegisterSubject />     
                        </div>
                            
                        <div className="tab-pane" id="ul-widget2-tab2-content">
                            <ListSubjects />        
                        </div>

                        <div className="tab-pane" id="ul-widget2-tab3-content">
                            <AssignSubject /> 
                        </div>

                        <div className="tab-pane" id="ul-widget2-tab4-content">
                            <AttendanceList />           
                        </div> 
                                                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManageSubjects