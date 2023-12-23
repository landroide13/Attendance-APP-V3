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
                {/* <button className="btn btn-info dropdown-toggle _r_btn border-0" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
                <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', top: 0, left: 0 }}>
                  {
                    filtered.map(lecture => (
                      <a key={lecture.id} className="dropdown-item ul-widget__link--font"  onClick={() => setOption(lecture.lecture_name)}>{ lecture.lecture_name }</a>
                    ))
                  }
                    
                </div> */}
            </div> 
            <div className="ul-widget__body">
                <div className="ul-widget1">

                    {  lectures.map(lecture => (
                        
                        <div className="ul-widget4__item ul-widget4__users" key={ lecture.id }>
                            <div className="ul-widget4__img"><img id="userDropdown" src="#" alt="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /></div>
                            <div className="ul-widget2__info ul-widget4__users-info">{ lecture.lecture_name }<span className="ul-widget2__username" href="#" style={{ fontSize: '1em' }}>Description</span></div><span className="ul-widget4__number t-font-boldest text-success"></span>
                        </div>
                        
                      ))
                    }
                </div>
            </div>                           
    </div>
  )
}

export default ListSubjects