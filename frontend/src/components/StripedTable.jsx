import React, { useState } from 'react'
import StripTableItem from './StripTableItem'

function StripedTable({ students, enrols, date }) {

  const [option, setOption] = useState({})

  const filteredStudent = enrols.filter(enrol => enrol.student.id === option.id)

  return (
    <div className="col-md-6 mb-2">
        <div className="card text-start">
            <div className="card-body">
                <div className="row">
                    <h4 className="card-title mb-3 ml-3">Attendance by Student</h4>

                    { date ?
                        <>
                            <button className="btn btn-info dropdown-toggle _r_btn border-0 ml-3 mb-3" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{ 'Select' }</button>
                            <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', top: 0, left: 0 }}>

                                {   students.map(student => (
                                        <a key={student.id} className="dropdown-item ul-widget__link--font text-success"  onClick={() => setOption(student)}>{ student.first_name } { student.last_name }</a>
                                    ))
                                }
                            </div>
                        </>
                        : null
                    }

                    
                </div>
                
                
                <div className="table-responsive">

                    <h4>{ option.first_name || null } { option.last_name || null }</h4>

                    <table className="table table-striped dataTable-collapse text-center">
                        <thead>
                            <tr>
                                <th scope="col">Subject</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredStudent.map(student => (
                                    
                                  <StripTableItem student={student} />

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

export default StripedTable
