import React ,{useState}from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Diabetes from "../assets/Diabetes6 New.svg";

const Diabetes6 = () => {
  const [thickness,setThickness]=useState("")
  const handleThick=(event)=>{
    setThickness(event.target.value)
  }
  const sendThick=async()=>{
    const final=await fetch('https://sehat-backend.onrender.com/api/thick',{
      method:"POST",
      headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(thickness)
  })
    if (final.ok){
      console.log(final)
    }
  }
  return (
    <div className="w-full h-full">
    <Navbar url="/concern1" loginUser="true" title="Diabetes Checkup" />
    <div className="w-full flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]">
      <div className="mt-24">
        <img className='h-40px'  src={Diabetes} alt="Diabetes Illustration" />
      </div>

      <div className="w-full mt-[60px] flex flex-col justify-center items-center">
        <div>
          <span className="mr-2 font-[600] text-[18px]">
            Enter Skin Thickness
          </span>
        </div>

        <div className="flex justc  items-center">
          <input
          onChange={handleThick}
            type="text"
            className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4"
          />
        </div>
      </div>

      {/* button */}
      <Link to="/Diabetes7">
        <button className="mt-[40px] bg-bluebtn py-3 px-12 text-white rounded-lg "onClick={sendThick}>
          Proceed
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Diabetes6