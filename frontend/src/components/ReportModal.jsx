import React, { useEffect, useState } from 'react'

function ReportModal({ student, date, isOpen, onClose}) {

    if (!isOpen) return null;

    const styles = {
        main: {
            backgroundColor: '#fefefe',
            width: "60%",
            position: "fixed",
            top: '9em',
            left: '9em',  
            height: "75%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
        },
        inputText: {
          padding: "10px",
          color: "red",
        },
      };


  return (

    <div class="card" style={{ ...styles.main }}>
        <div class="card-body">
            <h4 class="card-title">Report { date }</h4>
            <hr />
            {/* <h6>Student Name: { student ? student[0].student.first_name : '' } { student ? student[0].student.last_name : '' }</h6>
            <hr />
            <h6>Subject Name: { student ?  student[0].lecture.lecture_name : '' }</h6> */}

            <table className="table table-striped dataTable-collapse table-hover text-center">
                <thead>
                    <tr>
                        <th scope="col">Subject</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
            {
                student.map(student => {

                    const filter = student.attendance.filter(attendance => attendance.date === date) 
                    console.log(student)

                    return(
                        <tbody>
                            <tr>
                                <td class="">{ student.lecture.lecture_name }</td>
                                {
                                    filter.map(attendance => (
                                        <>
                                            <td>{ attendance.date }</td>
                                            <td>{ attendance.status }</td>
                                        </>
                                    ))
                                }
                            </tr>
                        </tbody>
                    )
                })
            }
            </table>

            <div class="btn-group">
                <a href="#" class="btn btn-danger" onClick={onClose}>Close</a>   
                <a href="#" class="btn btn-primary">Download Report</a> 
            </div>

        </div>
    </div>

  )
}

export default ReportModal