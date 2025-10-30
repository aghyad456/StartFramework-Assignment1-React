import Text from '../components/Text/Text'
import ImgOne from '../assets/Images/port1.png'
import ImgTwo from '../assets/Images/port2.png'
import ImgThree from '../assets/Images/port3.png'
import { FaPlus } from "react-icons/fa";
import CardComponent from '../components/CardComponent/CardComponent'



export default function Portfolio() {


  const imgs = [
    {img:ImgOne},
    {img:ImgTwo},
    {img:ImgThree},
    {img:ImgOne},
    {img:ImgTwo},
    {img:ImgThree},
    {img:ImgOne},
    {img:ImgTwo},
    {img:ImgThree}
  
  ]

  return (<>
    <div className='Portfolio-content w-100 h-100  d-flex flex-column justify-content-center align-items-center'>
      <div className="py-3">
         <Text title="Portfolio Component" color="#2C3E50" />
      </div>
        <div className=" row mx-5  ">
            {imgs.map((item, index) => {
              return <CardComponent key={index} img={item.img} />
            })}
        </div>
    </div>

   
    </>
  )
}
