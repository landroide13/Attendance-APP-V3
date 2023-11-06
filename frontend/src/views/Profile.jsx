import React from 'react'

function Profile() {

    const avatar = new URL('../assets/images/fallback-avatar.jpg', import.meta.url).href

    const pic1 = new URL('../assets/images/photo-wide-1.jpg', import.meta.url).href

    const pic2 = new URL('../assets/images/photo-wide-2.jpg', import.meta.url).href

    const pic3 = new URL('../assets/images/photo-wide-3.jpg', import.meta.url).href

    const pic4 = new URL('../assets/images/photo-wide-4.jpg', import.meta.url).href

  return (
    <div className="main-content">
                <div className="breadcrumb">
                    <h1>User Profile</h1>
                    <ul>
                       
                    </ul>
                </div>
                <div className="separator-breadcrumb border-top"></div>
                <div className="card user-profile o-hidden mb-4">
                    <div className="header-cover" ></div>
                    <div className="user-info"><img className="profile-picture avatar-lg mb-2" src={ avatar } alt="" />
                        <p className="m-0 text-24">Timothy Carlson</p>
                        <p className="text-muted m-0">Digital Marketer</p>
                    </div>
                    <div className="card-body">
                        <ul className="nav nav-tabs profile-nav mb-4" id="profileTab" role="tablist">
                            <li className="nav-item"><a className="nav-link active" id="timeline-tab" data-bs-toggle="tab" href="#timeline" role="tab" aria-controls="timeline" aria-selected="false">Timeline</a></li>
                            <li className="nav-item"><a className="nav-link" id="about-tab" data-bs-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="true">About</a></li>
                            <li className="nav-item"><a className="nav-link" id="friends-tab" data-bs-toggle="tab" href="#friends" role="tab" aria-controls="friends" aria-selected="false">Friends</a></li>
                            <li className="nav-item"><a className="nav-link" id="photos-tab" data-bs-toggle="tab" href="#photos" role="tab" aria-controls="photos" aria-selected="false">Photos</a></li>
                        </ul>
                        <div className="tab-content" id="profileTabContent">
                            <div className="tab-pane fade active show" id="timeline" role="tabpanel" aria-labelledby="timeline-tab">
                                <ul className="timeline clearfix">
                                    <li className="timeline-line"></li>
                                    <li className="timeline-item">
                                        <div className="timeline-badge"><i className="badge-icon bg-primary text-white i-Cloud-Picture"></i></div>
                                        <div className="timeline-card card">
                                            <div className="card-body">
                                                <div className="mb-1"><strong className="me-1">Timothy Carlson</strong> added a new photo
                                                    <p className="text-muted">3 hours ago</p>
                                                </div><img className="rounded mb-2" src={ pic1 } alt="" />
                                                <div className="mb-3"><a className="me-1" href="#">Like</a><a href="#">Comment</a></div>
                                                <div className="input-group">
                                                    <input className="form-control" type="text" placeholder="Write comment" aria-label="comment" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary" id="button-comment1" type="button">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-badge"><img className="badge-img" src={ pic2 } alt="" /></div>
                                        <div className="timeline-card card">
                                            <div className="card-body">
                                                <div className="mb-1"><strong className="me-1">Timothy Carlson</strong> updated his sattus
                                                    <p className="text-muted">16 hours ago</p>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta beatae illo illum iusto iste mollitia explicabo quam officia. Quas ullam, quisquam architecto aspernatur enim iure debitis dignissimos suscipit
                                                    ipsa.
                                                </p>
                                                <div className="mb-3"><a className="me-1" href="#">Like</a><a href="#">Comment</a></div>
                                                <div className="input-group">
                                                    <input className="form-control" type="text" placeholder="Write comment" aria-label="comment" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary" id="button-comment2" type="button">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="timeline clearfix">
                                    <li className="timeline-line"></li>
                                    <li className="timeline-group text-center">
                                        <button className="btn btn-icon-text btn-primary"><i className="i-Calendar-4"></i> 2018</button>
                                    </li>
                                </ul>
                                <ul className="timeline clearfix">
                                    <li className="timeline-line"></li>
                                    <li className="timeline-item">
                                        <div className="timeline-badge"><i className="badge-icon bg-danger text-white i-Love-User"></i></div>
                                        <div className="timeline-card card">
                                            <div className="card-body">
                                                <div className="mb-1"><strong className="me-1">New followers</strong>
                                                    <p className="text-muted">2 days ago</p>
                                                </div>
                                                <p><a href="#">Henry krick</a> and 16 others followed you</p>
                                                <div className="mb-3"><a className="me-1" href="#">Like</a><a href="#">Comment</a></div>
                                                <div className="input-group">
                                                    <input className="form-control" type="text" placeholder="Write comment" aria-label="comment" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary" id="button-comment3" type="button">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-badge"><i className="badge-icon bg-primary text-white i-Cloud-Picture"></i></div>
                                        <div className="timeline-card card">
                                            <div className="card-body">
                                                <div className="mb-1"><strong className="me-1">Timothy Carlson</strong> added a new photo
                                                    <p className="text-muted">2 days ago</p>
                                                </div><img className="rounded mb-2" src={ pic3 } alt="" />
                                                <div className="mb-3"><a className="me-1" href="#">Like</a><a href="#">Comment</a></div>
                                                <div className="input-group">
                                                    <input className="form-control" type="text" placeholder="Write comment" aria-label="comment" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary" id="button-comment4" type="button">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="timeline clearfix">
                                    <li className="timeline-line"></li>
                                    <li className="timeline-group text-center">
                                        <button className="btn btn-icon-text btn-warning"><i className="i-Calendar-4"></i> Joined
                                            in 2013
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">
                                <h4>Personal Information</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, commodi quam! Provident quis voluptate asperiores ullam, quidem odio pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nulla eos?
                                    Cum non ex voluptate corporis id asperiores doloribus dignissimos blanditiis iusto qui repellendus deleniti aliquam, vel quae eligendi explicabo.
                                </p>
                                <hr />
                                <div className="row">
                                    <div className="col-md-4 col-6">
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-Calendar text-16 me-1"></i> Birth Date</p><span>1 Jan, 1994</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-Edit-Map text-16 me-1"></i> Birth Place</p><span>Dhaka, DB</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-Globe text-16 me-1"></i> Lives In</p><span>Dhaka, DB</span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-MaleFemale text-16 me-1"></i> Gender</p><span>1 Jan, 1994</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-MaleFemale text-16 me-1"></i> Email</p><span>example@ui-lib.com</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-Cloud-Weather text-16 me-1"></i> Website</p><span>www.ui-lib.com</span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-Face-Style-4 text-16 me-1"></i> Profession</p><span>Digital Marketer</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-Professor text-16 me-1"></i> Experience</p><span>8 Years</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-Home1 text-16 me-1"></i> School</p><span>School of Digital Marketing</span>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <h4>Other Info</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolore labore reiciendis ab quo ducimus reprehenderit natus debitis, provident ad iure sed aut animi dolor incidunt voluptatem. Blanditiis, nobis aut.</p>
                                <div className="row">
                                    <div className="col-md-2 col-sm-4 col-6 text-center"><i className="i-Plane text-32 text-primary"></i>
                                        <p className="text-16 mt-1">Travelling</p>
                                    </div>
                                    <div className="col-md-2 col-sm-4 col-6 text-center"><i className="i-Camera text-32 text-primary"></i>
                                        <p className="text-16 mt-1">Photography</p>
                                    </div>
                                    <div className="col-md-2 col-sm-4 col-6 text-center"><i className="i-Car-3 text-32 text-primary"></i>
                                        <p className="text-16 mt-1">Driving</p>
                                    </div>
                                    <div className="col-md-2 col-sm-4 col-6 text-center"><i className="i-Gamepad-2 text-32 text-primary"></i>
                                        <p className="text-16 mt-1">Gaming</p>
                                    </div>
                                    <div className="col-md-2 col-sm-4 col-6 text-center"><i className="i-Music-Note-2 text-32 text-primary"></i>
                                        <p className="text-16 mt-1">Music</p>
                                    </div>
                                    <div className="col-md-2 col-sm-4 col-6 text-center"><i className="i-Shopping-Bag text-32 text-primary"></i>
                                        <p className="text-16 mt-1">Shopping</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="friends" role="tabpanel" aria-labelledby="friends-tab">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="card card-profile-1 mb-4">
                                            <div className="card-body text-center">
                                                <div className="avatar box-shadow-2 mb-3"><img src={ pic4 } alt="" /></div>
                                                <h5 className="m-0">Jassica Hike</h5>
                                                <p className="mt-0">UI/UX Designer</p>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>
                                                <button className="btn btn-primary btn-rounded">Contact Jassica</button>
                                                <div className="card-socials-simple mt-4"><a href=""><i className="i-Linkedin-2"></i></a><a href=""><i className="i-Facebook-2"></i></a><a href=""><i className="i-Twitter"></i></a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card card-profile-1 mb-4">
                                            <div className="card-body text-center">
                                                <div className="avatar box-shadow-2 mb-3"><img src="../../dist-assets/images/faces/2.jpg" alt="" /></div>
                                                <h5 className="m-0">Frank Powell</h5>
                                                <p className="mt-0">UI/UX Designer</p>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>
                                                <button className="btn btn-primary btn-rounded">Contact Frank</button>
                                                <div className="card-socials-simple mt-4"><a href=""><i className="i-Linkedin-2"></i></a><a href=""><i className="i-Facebook-2"></i></a><a href=""><i className="i-Twitter"></i></a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card card-profile-1 mb-4">
                                            <div className="card-body text-center">
                                                <div className="avatar box-shadow-2 mb-3"><img src="../../dist-assets/images/faces/3.jpg" alt="" /></div>
                                                <h5 className="m-0">Arthur Mendoza</h5>
                                                <p className="mt-0">UI/UX Designer</p>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>
                                                <button className="btn btn-primary btn-rounded">Contact Arthur</button>
                                                <div className="card-socials-simple mt-4"><a href=""><i className="i-Linkedin-2"></i></a><a href=""><i className="i-Facebook-2"></i></a><a href=""><i className="i-Twitter"></i></a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card card-profile-1 mb-4">
                                            <div className="card-body text-center">
                                                <div className="avatar box-shadow-2 mb-3"><img src="../../dist-assets/images/faces/4.jpg" alt="" /></div>
                                                <h5 className="m-0">Jacqueline Day</h5>
                                                <p className="mt-0">UI/UX Designer</p>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>
                                                <button className="btn btn-primary btn-rounded">Contact Jacqueline</button>
                                                <div className="card-socials-simple mt-4"><a href=""><i className="i-Linkedin-2"></i></a><a href=""><i className="i-Facebook-2"></i></a><a href=""><i className="i-Twitter"></i></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="photos" role="tabpanel" aria-labelledby="photos-tab">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card text-white o-hidden mb-3"><img className="card-img" src="../../dist-assets/images/products/headphone-1.jpg" alt="" />
                                            <div className="card-img-overlay">
                                                <div className="p-1 text-start card-footer font-weight-light d-flex"><span className="me-3 d-flex align-items-center"><i className="i-Speach-Bubble-6 me-1"></i>12</span><span className="d-flex align-items-center"><i className="i-Calendar-4 me-2"></i>03.12.2018</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card text-white o-hidden mb-3"><img className="card-img" src="../../dist-assets/images/products/headphone-2.jpg" alt="" />
                                            <div className="card-img-overlay">
                                                <div className="p-1 text-start card-footer font-weight-light d-flex"><span className="me-3 d-flex align-items-center"><i className="i-Speach-Bubble-6 me-1"></i>12</span><span className="d-flex align-items-center"><i className="i-Calendar-4 me-2"></i>03.12.2018</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card text-white o-hidden mb-3"><img className="card-img" src="../../dist-assets/images/products/headphone-3.jpg" alt="" />
                                            <div className="card-img-overlay">
                                                <div className="p-1 text-start card-footer font-weight-light d-flex"><span className="me-3 d-flex align-items-center"><i className="i-Speach-Bubble-6 me-1"></i>12</span><span className="d-flex align-items-center"><i className="i-Calendar-4 me-2"></i>03.12.2018</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card text-white o-hidden mb-3"><img className="card-img" src="../../dist-assets/images/products/iphone-1.jpg" alt="" />
                                            <div className="card-img-overlay">
                                                <div className="p-1 text-start card-footer font-weight-light d-flex"><span className="me-3 d-flex align-items-center"><i className="i-Speach-Bubble-6 me-1"></i>12</span><span className="d-flex align-items-center"><i className="i-Calendar-4 me-2"></i>03.12.2018</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card text-white o-hidden mb-3"><img className="card-img" src="../../dist-assets/images/products/iphone-2.jpg" alt="" />
                                            <div className="card-img-overlay">
                                                <div className="p-1 text-start card-footer font-weight-light d-flex"><span className="me-3 d-flex align-items-center"><i className="i-Speach-Bubble-6 me-1"></i>12</span><span className="d-flex align-items-center"><i className="i-Calendar-4 me-2"></i>03.12.2018</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card text-white o-hidden mb-3"><img className="card-img" src="../../dist-assets/images/products/watch-1.jpg" alt="" />
                                            <div className="card-img-overlay">
                                                <div className="p-1 text-start card-footer font-weight-light d-flex"><span className="me-3 d-flex align-items-center"><i className="i-Speach-Bubble-6 me-1"></i> 12</span><span className="d-flex align-items-center"><i className="i-Calendar-4 me-2"></i>03.12.2018</span></div>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile