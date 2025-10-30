import React from 'react'
import Text from '../components/Text/Text'

export default function About() {
  return <>
  <div className="About-content main-color main-color   d-flex justify-content-center align-items-center">
      <div className="content d-flex flex-column justify-content-center mx-5 m-auto align-items-center ">
            <Text title="About Component" color="white" />
            <div className=" row py-3 px-5 mx-5">
              <div className="about-text col-6 px-3 text-white  ">
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className="about-text col-6 px-3 text-white  ">
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>

             </div>
        </div>
  </div>
  </>
}
