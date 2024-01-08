import React from 'react'

function ListUtil({ lecturers }) {

    const [ {lectures} = { } ] = lecturers.length > 0 ? lecturers : [{ }]

  return (
    <div className="col-lg-6 col-md-6">
        <div className="card mb-3">
                    
            <div className="card-header d-flex align-items-left">
                <h3 className="w-50 float-start card-title m-0">Lectures</h3>
            </div>

            <div className="card-body"> 
                <div className="table-responsive">
                    <table className="display table text-center table-bordered" id="scroll_vertical_table" style={{ width:"100%" }}>
                          <thead>
                            <tr>
                              <th scope="col">#ID</th>
                              <th scope="col">Tutor Name</th>
                              <th scope="col">Lecture / Term / Year</th>
                            </tr>
                          </thead>

                          <tbody>
                            { lecturers && lecturers.map(lecturer => ( 

                             <tr key={lecturer.id}>
                              <th scope="row">{ lecturer.id }</th>
                              <td className="m-0">{ lecturer.first_name } { lecturer.last_name }</td>

                              <td>
                              { lecturer.lectures.map(lecture => (
                                 <tr className="m-0">{ lecture.lecture_name  } / { lecture.term.term } - { lecture.term.year }</tr>
                              ))}
                              </td>
                             
                            </tr>

                            ))}
                          </tbody>
                    </table>
                </div>
            </div>   
        </div>
    </div>
  )


}

export default ListUtil