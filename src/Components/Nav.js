import React,{useState,useEffect} from 'react'
import './Nav.css'
function Nav() {

    const [show, setShow]=useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scroll>500){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    },[])
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img alt='' className='nav-img' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"  />
    </div>
  )
}

export default Nav 