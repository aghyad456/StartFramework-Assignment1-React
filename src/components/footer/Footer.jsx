import React from 'react'

export default function Footer() {
  return (
    <>
            <div className="col-md-4 p-5">
              <h4 className="text-uppercase fs-2 mb-2">LOCATION</h4>
              <p className="lead  pb-1 fs-5">2215 John Daniel Drive</p>
                <p className="pt-1 fs-5">Clark,MO 65243</p>
              </div>
            <div className="col-md-4 py-5">
              <h4 className="text-uppercase mb-2 fs-3">AROUND THE WEB</h4>
              <div className="d-flex justify-content-center gap-2">
                <a className="btn border-1 border-solide d-flex justify-content-center align-items-center border-light text-light btn-social rounded-circle " href="#"><i className="fab fa-facebook-f text-center"></i></a>
                <a className="btn border-1 border-solide d-flex justify-content-center align-items-center border-light text-light btn-social rounded-circle " href="#"><i className="fab fa-twitter "></i></a>
                <a className="btn border-1 border-solide d-flex justify-content-center align-items-center border-light text-light btn-social rounded-circle " href="#"><i className="fab fa-linkedin-in"></i></a>
                <a className="btn border-1 border-solide d-flex justify-content-center align-items-center border-light text-light btn-social rounded-circle " href="#"><i className="fas fa-globe"></i></a>
              </div>
            </div>
            <div className="col-md-4 py-5">
              <h4 className="text-uppercase mb-2">ABOUT FREELANCER</h4>
              <p className="lead mb-0">
                Freelance is a free to use, licensed Bootstrap theme created by Route
              </p>
            </div>
    </>
  )
}
