import React from 'react'

function List() {


  return (
    <div className="col-lg-12 col-md-12 col-xl-10 mb-2">

       
            <div className="ul-widget__head pb-20 v-margin">
                <div className="ul-widget__head-label">
                    <h3 className="ul-widget__head-title">Users List</h3>
                </div>
                <button className="btn btn-info dropdown-toggle _r_btn border-0" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Latest</button>
                <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', top: 0, left: 0 }}><a className="dropdown-item ul-widget__link--font" href="#"><i className="i-Bar-Chart-4"> </i> Export</a><a className="dropdown-item ul-widget__link--font" href="#"><i className="i-Data-Save"> </i> Save</a><a className="dropdown-item ul-widget__link--font" href="#"><i className="i-Duplicate-Layer"></i> Import</a>
                    <div className="dropdown-divider"></div><a className="dropdown-item ul-widget__link--font" href="#"><i className="i-Folder-Download"></i> Update</a><a className="dropdown-item ul-widget__link--font" href="#"><i className="i-Gears-2"></i> Customize</a>
                </div>
            </div>
            <div className="ul-widget__body">
                <div className="ul-widget1">
                    <div className="ul-widget4__item ul-widget4__users">
                        <div className="ul-widget4__img"><img id="userDropdown" src="../../dist-assets/images/faces/1.jpg" alt="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /></div>
                        <div className="ul-widget2__info ul-widget4__users-info"><a className="ul-widget2__title" href="#">Anna Strong</a><span className="ul-widget2__username" href="#">Admin</span></div><span className="ul-widget4__number t-font-boldest text-success">+500</span>
                    </div>
                    <div className="ul-widget4__item ul-widget4__users">
                        <div className="ul-widget4__img"><img id="userDropdown" src="../../dist-assets/images/faces/2.jpg" alt="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /></div>
                        <div className="ul-widget2__info ul-widget4__users-info"><a className="ul-widget2__title" href="#">Will Smith</a><span className="ul-widget2__username" href="#">Operations</span></div><span className="ul-widget4__number t-font-boldest text-danger">+900</span>
                    </div>
                    <div className="ul-widget4__item ul-widget4__users">
                        <div className="ul-widget4__img"><img id="userDropdown" src="../../dist-assets/images/faces/3.jpg" alt="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /></div>
                        <div className="ul-widget2__info ul-widget4__users-info"><a className="ul-widget2__title" href="#">Will Smith</a><span className="ul-widget2__username" href="#">Tutor</span></div><span className="ul-widget4__number t-font-boldest text-primary">+700</span>
                    </div>
                    <div className="ul-widget4__item ul-widget4__users">
                        <div className="ul-widget4__img"><img id="userDropdown" src="../../dist-assets/images/faces/4.jpg" alt="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /></div>
                        <div className="ul-widget2__info ul-widget4__users-info"><a className="ul-widget2__title" href="#">Megan Fox</a><span className="ul-widget2__username" href="#">Tutors</span></div><span className="ul-widget4__number t-font-boldest text-warning">+100</span>
                    </div>
                </div>
            </div>                     
                          
    </div>
  )
}

export default List
