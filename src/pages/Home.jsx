import React from 'react'
import Img1 from "../assets/Images/img1.svg"
import { FaStar } from "react-icons/fa";
import Text from '../components/Text/Text';
export default function Home() {
  return <>
    <section className='home-contiener main-color   d-flex justify-content-center align-items-center'>
      <div className="content d-flex flex-column justify-content-center align-items-center">
        <img src={Img1} alt="" />
        <div className="text-white">
           <Text title="start Framework" color="white" />
        </div>
          <p className=' pt-3 text-white '>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  </>
}
