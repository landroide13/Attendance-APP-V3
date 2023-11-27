import React from 'react'

function LectureTableItem({ student }) {

  return (
    <tr> 
        {
            student.attendance.map(attendance => (
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
            student.attendance.map(attendance => (
                <>
                    <td scope="col">{ attendance.status }</td>
                </>
            ))
        }
    </tr>
  )

}

export default LectureTableItem