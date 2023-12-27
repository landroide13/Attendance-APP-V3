import React, { useEffect, useState } from 'react'
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";
import {Link} from "react-router-dom";
import StudentModal from './StudentModal'

function ListStudent() {

    const [students, setStudent] = useState([])
    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()

    const [option, setOption] = useState('');
    const [open, setOpen] = useState(false)
    const [selectId, setSelectId] = useState(null);

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

    const handleItem = item => {
      console.log(item)
      setSelectId(item)
      setOpen(true)
    }

    const handleClose = () =>{
      setOpen(false)
    }

  return (        
    <div className="col-lg-12 col-md-12 col-xl-10 mb-2">

        <div className="ul-widget__head pb-20 v-margin">  
            <div className="ul-widget__head-label">
                <h3 className="ul-widget__head-title">Student List: <span className='text-success'> { option.lecture_name } </span></h3>
            </div>
        </div>
        <div className="ul-widget__body">
            <div className="ul-widget1">

              { students.map(student => (
                       
                <div className="ul-widget4__item ul-widget4__users" key={ student.id }>
                  <div className="ul-widget4__img"><img id="userDropdown" src="#" alt="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /></div>
                  <div className="ul-widget2__info ul-widget4__users-info"><Link className="ul-widget2__title" to={'/manageStudents/' + student.id}>{ student.first_name } { student.last_name }</Link><span className="ul-widget2__username" href="#"></span></div>
                  <button className="btn btn-success mr-3" type="button"   onClick={() => handleItem(student.id)}>Edit</button>
                </div>

              ))}
            </div>
        </div>    

      { selectId &&
                         
        <StudentModal 
          id={selectId} 
          onClose={handleClose}   
          open={open} />
      } 
                    
    </div>
  )
}

export default ListStudent