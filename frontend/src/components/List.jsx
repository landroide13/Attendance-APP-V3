import React, { useEffect, useState }  from 'react'
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

function List( ) {

    const [users, setUser] = useState([])
    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()

    const [option, setOption] = useState('super_admin');

    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/users')
          .then(({ data }) => {
            setUser(data.data)
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

    useEffect(() => {     
        getUsers();
      }, []);

  const filtered =  users.filter(user => user.role == option)
  
  return (
    <div className="col-lg-12 col-md-12 col-xl-10 mb-2">

            <div className="ul-widget__head pb-20 v-margin">
                <div className="ul-widget__head-label">
                    <h3 className="ul-widget__head-title"> List By:  <span className='text-success'> { option } </span></h3>
                </div>
                <button className="btn btn-info dropdown-toggle _r_btn border-0" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
                <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', top: 0, left: 0 }}>
                  <a className="dropdown-item ul-widget__link--font"  onClick={() => setOption('super_admin')}> Super Admin</a>
                  <a className="dropdown-item ul-widget__link--font"  onClick={() => setOption('admin')} > Admins</a>
                  <a className="dropdown-item ul-widget__link--font"  onClick={() => setOption('tutor')}>Tutors</a>
                </div>
            </div>
            <div className="ul-widget__body">
                <div className="ul-widget1">

                    {  filtered.map(user => (
                        
                      <div className="ul-widget4__item ul-widget4__users" key={ user.id }>
                        <div className="ul-widget4__img"><img id="userDropdown" src="#" alt="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /></div>
                        <div className="ul-widget2__info ul-widget4__users-info"><a className="ul-widget2__title" href="#">{ user.first_name } { user.last_name }</a><span className="ul-widget2__username" href="#">{ user.role }</span></div> <button className="btn btn-danger" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Delete</button>
                      </div>
                        
                      ))
                    }
                </div>
            </div>                     
                          
    </div>
  )
}

export default List
