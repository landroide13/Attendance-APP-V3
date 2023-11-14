import React from 'react'
import TableItem from './TableItem'

function ListTable() {
  return (
    <div className="card col-md-8 offset-md-2">
        <div className="card-body">
            <div className="ul-widget__head">
                <div className="ul-widget__head-label">
                    <h3 className="ul-widget__head-title">Take Attendance</h3>
                </div>
                <div className="ul-widget__head-toolbar">
                    <ul className="nav nav-tabs nav-tabs-line nav-tabs-bold ul-widget-nav-tabs-line ul-widget-nav-tabs-line" role="tablist">
                        <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#ul-widget2-tab1-content" role="tab">Page 1</a></li>
                        <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#ul-widget2-tab2-content" role="tab">Page 2</a></li>
                        <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#ul-widget2-tab3-content" role="tab">Page 3</a></li>
                    </ul>
                </div>                            
            </div>
            <div className="ul-widget__body">
                <div className="tab-content">
                    <div className="tab-pane active" id="ul-widget2-tab1-content">
                        <TableItem />
                        <TableItem />
                        <TableItem />
                        <TableItem />                                                     
                    </div>

                    <div className="tab-pane" id="ul-widget2-tab2-content">
                        <TableItem />
                        <TableItem />                
                    </div>

                    <div className="tab-pane" id="ul-widget2-tab3-content">
                                                    
                        <TableItem />
                        <TableItem />
                        <TableItem />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListTable
