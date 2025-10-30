

export default function Modal({img, setOpen}) {

    function onClose(){
        setOpen(false)
    }
  return (<>
        <div className="layer-content position-fixed top-0  start-0 w-100 h-100 d-flex justify-content-center align-items-center z-3 " onClick={onClose}>   
            <div className='d-flex justify-content-center align-items-center  pt-5 '>
                <img src={img} alt='modal img' className=' w-75  rounded opacity-100' onClick={(e)=>e.stopPropagation()} />
            </div>
        </div>
  </>
  )
}
