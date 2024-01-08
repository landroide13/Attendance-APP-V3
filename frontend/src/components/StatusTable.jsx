import React, { useState, useEffect }  from 'react'
import axiosClient from "../axios-client.jsx";

function StatusTable(props) {

    const { leave } = props

    const [students, setStudent] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {   
        getStudents();
      }, []);

    const getStudents = () => {
        setLoading(true)
        axiosClient.get('/students')
          .then(({ data }) => {
            setStudent(data.data)
            setLoading(false)
          })
          .catch(() => {
            const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
          setLoading(false)
        })
    }  

    const avatar = new URL('../assets/images/fallback-avatar.jpg', import.meta.url).href

    const studentData = idx => { 
        let student = students && students.filter(student => student.id === idx)
        const [ data ] = student || []
        return data
    }

  return (
   
        <div className="col-md-6">
            <div className="card mb-3">

                <div className="card-header d-flex align-items-left">
                    <h3 className="w-50 float-start card-title m-0">Students on Leave</h3>
                </div>

                <div className="card-body">
                    <div className="table-responsive">
                        <table className="display table text-center table-bordered" id="scroll_vertical_table" style={{ width:"100%" }}>
                            <thead>
                                <tr> 
                                    <th scope="col">#ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Parent Email</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                { leave && leave.map(le => { 

                                   const { id , first_name, last_name, parent_email } = studentData(le.student_id) || { }
                                    
                                return(
                                         <tr key={id}>
                                            <th scope="row">{ id }</th>
                                            <td>{ first_name } { last_name}</td>
                                            <td>{ parent_email }</td>
                                            <td><span className="badge bg-warning">Leave</span></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default StatusTable
