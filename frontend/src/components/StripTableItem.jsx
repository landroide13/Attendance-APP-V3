import React from 'react'

function StripTableItem({ student }) {
  return (
    <tr> 
        {
            <>
                <td>{ student.lecture.lecture_name }</td>
            </>
        }

        {
            student.attendance.map(attendance => (
                <>
                    <td scope="col">{ attendance.date }</td>
                    <td scope="col">{ attendance.status }</td>
                </>
            ))
        }
    </tr>
  )
}

export default StripTableItem