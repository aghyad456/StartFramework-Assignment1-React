import { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import Modal from '../Modal/Modal';


export default function CardComponent({img}) {

  const[open, setOpen] = useState(false)
  const toggle=()=>{
    setOpen(!open)
  }

  return (<>

     <div className=" col-12 col-md-6 col-lg-4 ">
        <figure className=' w-100 position-relative rounded' onClick={toggle}>
            <img src={img} alt='portfolio1' className='w-100 opacity-100 rounded' />
            <div className="fogur-layer main-color position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-white   ">
              <FaPlus size={70} />     
            </div>
        </figure>
      </div>
       {open&&<Modal img={img} setOpen={setOpen}/>} 
  </>
  )
}
