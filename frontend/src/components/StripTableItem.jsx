import React from 'react'

function StripTableItem({ student, date }) {

    const filter = student.attendance.filter(attendance => attendance.date === date) 

  return (
    filter.length !== 0 ?
    <tr> 
        {
            <>
                <td scope="col">{ student.lecture.lecture_name }</td>
            </>
        }

        {
            filter.map(attendance => (
                <>
                    <td scope="col">{ attendance.date }</td>
                    <td scope="col">{ attendance.status }</td>
                </>
            ))
        }
    </tr>
    : <h5>{ null }</h5>
  )
}

export default StripTableItem