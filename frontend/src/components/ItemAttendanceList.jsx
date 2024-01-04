import React, { useState } from 'react'
import AttendanceModal from './AttendanceModal.jsx';

function ItemAttendanceList(props) {

    const [attendanceId, setAttendanceId] = useState(null);
    const [open, setOpen] = useState(false);
    
    const styles = {
        'Present':  'bg-primary text-white' ,
        'Absent': 'bg-alert' ,
        'Leave': 'bg-warning',
      };

    const { attendance, students } = props;

    const handleAttendance = id => {
        setAttendanceId(id)
        setOpen(true)
      }
    
      const handleClose = () =>{
        setOpen(false)
      }

    const studentName = id => { 
        let student = students && students.filter(student => student.id === id)
        const [ data ] = student
        const { first_name, last_name } = data || { }
        return first_name + " " + last_name
    }

    console.log(attendance.status)

  return ( 
    <>
        <tr>
            <th scope="row" onClick={() => handleAttendance(attendance.id)} style={{ fontSize: '1.2em' }} >{ new Date(attendance.attendance_time).getDate() }/{ new Date(attendance.attendance_time).getMonth() + 1 }/{ new Date(attendance.attendance_time).getFullYear() }</th>
            <td style={{ fontSize: '1.2em' }} >{ studentName(attendance.student_id) }</td>
            <td><span className={`badge ${styles[attendance.status]}`} style={{ fontSize: '1.2em' }}>{ attendance.status}</span></td>
        </tr> 

        { attendanceId &&
                                
            <AttendanceModal
            key={attendance.id} 
            attendanceId={attendanceId}
            onClose={handleClose}   
            open={open} />
        }
    </>
  )
}

export default ItemAttendanceList