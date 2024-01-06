import React, { useState } from 'react'
import LectureTableItem from './LectureTableItem'

function LectureTable({ lectures, date }) {

    const [option, setOption] = useState({})  

    const filteredLecture = lectures && lectures.filter(lecture => lecture.id === option.id)
  
    return (
      <div className="col-md-6 mb-2">
          <div className="card text-start">  
              <div className="card-body">
                  <div className="row">
                      <h4 className="card-title mb-3 ml-3">Attendance by Lecture</h4>

                       { date ? 
                            <>
                                <button className="btn btn-info dropdown-toggle _r_btn border-0 ml-3 mb-3" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{ 'Select' }</button>
                                <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', top: 0, left: 0 }}>

                                {  lectures.map(lecture => (
                                        <a key={lecture.id} className="dropdown-item ul-widget__link--font text-success"  onClick={() => setOption(lecture)}>{ lecture.lecture_name }</a>
                                    ))
                                }
                                </div>

                                <button className="btn btn-outline-info btn-sm ml-5" href="#"><i className="i-Folder-Download mr-3"></i>Export</button>
                            </>
                         : null
                       } 
                      
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
                                      
                                    <LectureTableItem student={student} date={date} />
  
                                ))
                              }
                          </tbody>
                      </table>
                    </div>

                    <div class="dataTables_paginate paging_simple_numbers mt-5 offset-md-4" id="user_table_paginate">
                        <ul class="pagination">
                            <li class="paginate_button page-item previous disabled" id="user_table_previous">
                            <a href="#" aria-controls="user_table" data-dt-idx="0" tabindex="0" class="page-link">Previous</a>
                            </li>
                            <li class="paginate_button page-item active">
                            <a href="#" aria-controls="user_table" data-dt-idx="1" tabindex="0" class="page-link">1</a>
                            </li>
                            <li class="paginate_button page-item next disabled" id="user_table_next">
                            <a href="#" aria-controls="user_table" data-dt-idx="2" tabindex="0" class="page-link">Next</a>
                            </li>
                        </ul>
                    </div>
              </div>
          </div>
      </div>
     
    )

}

export default LectureTable