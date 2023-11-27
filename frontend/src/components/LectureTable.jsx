import React, { useState } from 'react'
import LectureTableItem from './LectureTableItem'

function LectureTable({ lectures, enrols }) {

    const [option, setOption] = useState({})

    const filteredLecture = enrols.filter(enrol => enrol.lecture.id === option.id)
  
    return (
      <div className="col-md-6 mb-2">
          <div className="card text-start">
              <div className="card-body">
                  <div className="row">
                      <h4 className="card-title mb-3">Attendance by Lecture</h4>
  
                      <button className="btn btn-info dropdown-toggle _r_btn border-0 ml-3 mb-3" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{ 'Select' }</button>
                      <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', top: 0, left: 0 }}>
  
                        {  lectures.map(lecture => (
                                <a key={lecture.id} className="dropdown-item ul-widget__link--font text-success"  onClick={() => setOption(lecture)}>{ lecture.lecture_name }</a>
                            ))
                        }
                      </div>
                  </div>
                  
                  <div className="table-responsive">
                        <h4>{ option.lecture_name || null }</h4>
                      <table className="table table-striped dataTable-collapse text-center">

                          <thead>
                              <tr>
                                  <th scope="col">Date</th>
                                  <th scope="col">First Name</th>
                                  <th scope="col">Last Name</th>
                                  <th scope="col">Status</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                filteredLecture.map(student => (
                                      
                                    <LectureTableItem student={student} />
  
                                ))
                              }
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
     
    )

}

export default LectureTable