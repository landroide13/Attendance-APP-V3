import React, { useEffect, useState }  from 'react'
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

function List( ) {

    const [users, setUser] = useState([])
    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()

    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/users')
          .then(({ data }) => {
            setUser(data.data)
            setLoading(false)
            console.log(users[0])
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

  return (
    <div className="col-lg-12 col-md-12 col-xl-10 mb-2">

       
            <div className="ul-widget__head pb-20 v-margin">
                <div className="ul-widget__head-label">
                    <h3 className="ul-widget__head-title">Users List</h3>
                </div>
                <button className="btn btn-info dropdown-toggle _r_btn border-0" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All</button>
                <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', top: 0, left: 0 }}><a className="dropdown-item ul-widget__link--font" href="#"><i className="i-Bar-Chart-4"> </i> Super Admin</a><a className="dropdown-item ul-widget__link--font" href="#"><i className="i-Data-Save"> </i> Admins</a><a className="dropdown-item ul-widget__link--font" href="#"><i className="i-Duplicate-Layer"></i> Tutors</a>
                    {/* <div className="dropdown-divider"></div><a className="dropdown-item ul-widget__link--font" href="#"><i className="i-Folder-Download"></i> All</a><a className="dropdown-item ul-widget__link--font" href="#"><i className="i-Gears-2"></i> Customize</a> */}
                </div>
            </div>
            <div className="ul-widget__body">
                <div className="ul-widget1">

                    { users.map(user => (
                        
                        <div className="ul-widget4__item ul-widget4__users" key={ user.id }>
                            <div className="ul-widget4__img"><img id="userDropdown" src="../../dist-assets/images/faces/1.jpg" alt="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /></div>
                            <div className="ul-widget2__info ul-widget4__users-info"><a className="ul-widget2__title" href="#">{ user.first_name } { user.last_name }</a><span className="ul-widget2__username" href="#">{ user.role.name }</span></div><span className="ul-widget4__number t-font-boldest text-success">+500</span>
                        </div>
                        
                      ))
                    }
                    
                </div>
            </div>                     
                          
    </div>
  )
}

export default List
