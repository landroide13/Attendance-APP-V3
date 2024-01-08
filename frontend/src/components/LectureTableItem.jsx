import React from 'react'

function LectureTableItem({ student, date }) {

    const filter = student.attendance.filter(attendance => attendance.date === date) 

  return (

    filter.length !== 0 ?
        <tr> 
            { 
                filter.map(attendance => (
                    <>
                        <td scope="col">{ attendance.date }</td>
                    </>
                )) 
            }

            { 
                <>
                    <td>{ student.student.first_name }</td>
                </> 
            }
            { 
                <>
                    <td>{ student.student.last_name }</td>
                </> 
            }

            { 
                filter.map(attendance => (
                    <>
                        <td scope="col">{ attendance.status }</td>
                    </>
                )) 
            }
        </tr>

    : <h5>{ null }</h5>

  )

}

export default LectureTableItem