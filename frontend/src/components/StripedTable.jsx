import React, { useState } from 'react'
import StripTableItem from './StripTableItem'
import ReportModal from './ReportModal'

function StripedTable({ students, enrols, date }) {

  const [option, setOption] = useState({})

  const [open, setOpen] = useState(true)

  const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

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

                            <button className="btn btn-outline-info btn-sm ml-5" href="#" data-toggle="modal" data-target="#exampleModalLong" onClick={handleOpen}><i className="i-Folder-Download mr-3"></i>Export</button>
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
                                    
                                  <StripTableItem student={student} date={date} /> 

                                ))
                            }

                            <ReportModal student={filteredStudent}
                                date={date} isOpen={open}
                                onClose={handleClose} 
                            />

                        </tbody>
                    </table>
                </div>
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
   
  )
}

export default StripedTable
