import React from 'react'

function TableItem() {
  return (
    <div className="ul-widget1">
        <div className="ul-widget2__item">
            <label className="checkbox checkbox-outline-primary">
                <input type="checkbox" checked="" /><span className="checkmark"></span>
            </label>
            <div className="ul-widget2__info"><a className="ul-widget2__title" href="#">Student Name</a></div>
                <div className="ul-widget2__actions">
                    <button className="btn btn-primary" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="_dot _inline-dot"></span><span className="_dot _inline-dot"></span><span className="_dot _inline-dot"></span></button>
                <div className="dropdown-menu" x-placement="bottom-start"><a className="dropdown-item ul-widget__link--font" href="#"><i className="i-Statistic"> </i> Reports</a><a className="dropdown-item ul-widget__link--font" href="#"><i className="i-Email"> </i> Profile</a></div>
            </div>
        </div>
    </div>
  )
}

export default TableItem
