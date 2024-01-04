import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

function ListSubjects() {

    const [lectures, setLecture] = useState([])
    const [option, setOption] = useState('')

    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()
    const [errors, setErrors] = useState(null)

  useEffect(() => {     
    getSubjects();
  }, []);

  const getSubjects = () => {
    setLoading(true)
    axiosClient.get('/lectures')
      .then(({ data }) => {
      setLecture(data.data)
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

  
  const filtered =  lectures.filter(lecture => lecture.lecture_name == option)

  return (
    <div className="col-lg-12 col-md-12 col-xl-10 mb-2">

            <div className="ul-widget__head pb-20 v-margin">
                <div className="ul-widget__head-label">
                    <h3 className="ul-widget__head-title"> List Subjects: </h3>
                </div>
                <button className="btn btn-info dropdown-toggle _r_btn border-0" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
                <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', top: 0, left: 0 }}>
                  {
                    lectures.map(lecture => (
                      <a key={lecture.id} className="dropdown-item ul-widget__link--font"  onClick={() => setOption(lecture.lecture_name)}>{ lecture.lecture_name } / { lecture.term.term } - { lecture.term.year } </a>
                    ))
                  }
                    
                </div>
            </div> 
            <div className="table-responsive">
                <table className="table table-striped display table-bordered" id="scroll_vertical_table" style={{ width:"100%" }}> 

                    { filtered && filtered.map(lecture => (
                        
                        <tr key={ lecture.id }>
                            
                          <td className='d-flex flex-column'>
                            <span style={{ fontSize: '1.2em' }} className="text-success">{ lecture.lecture_name }</span>
                            <span style={{ fontSize: '1em' }}>Term: { lecture.term.term } / { lecture.term.year }</span>
                          </td>

                        </tr>
                        
                      )) 
                    }
                </table>
            </div>                           
    </div>
  )
}

export default ListSubjects