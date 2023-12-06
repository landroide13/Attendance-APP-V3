import React from 'react'

function ProfileCard({ lecture }) {
  return (
    <>
    <ul className="timeline clearfix">
        <li className="timeline-line"></li>
        <li className="timeline-item">
            <div className="timeline-badge"><i className="badge-icon bg-danger text-white i-Love-User"></i></div>
            <div className="timeline-card card">
                <div className="card-body">
                    <div className="mb-1"><strong className="me-1">Subject name: { lecture.lecture_name }</strong>
                        <p className="text-muted">Tutor: { lecture.tutor.first_name } { lecture.tutor.last_name }</p>
                    </div>
                </div>
            </div>   
        </li>   
    </ul>
    {/* <ul className="timeline clearfix">
        <li className="timeline-line"></li>
        <li className="timeline-group text-center">
            <button className="btn btn-icon-text btn-warning"><i className="i-Calendar-4"></i> Joined
                at 
            </button>
        </li>
    </ul> */}
</>
  )
}

export default ProfileCard