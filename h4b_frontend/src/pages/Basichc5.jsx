import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";
import CryptoJS from 'crypto-js';
import Navbar from "../components/Navbar";
import HeartBeatImg from "../assets/HeartbeatImg New.svg";
//import cryptoRandomString from 'crypto-random-string';
const Basichc5 = () => {
 // const secretKey=cryptoRandomString({length:64,type:'hex'});
  const [beat,setBeat]=useState("")
  const handleBeat= event => {
    setBeat(event.target.value);
};
const submitBeat=async()=>{
  //const encryptedValue=CryptoJS.AES.encrypt(beat,secretKey).toString();
  const final=await fetch('https://sehat-backend.onrender.com/api/beat',{
    method:"POST",
    headers:{
    'Content-Type':'application/json'
  },
  body: JSON.stringify(beat)
})
  if (final.ok){
    console.log(final)
  }
}
  return (
    <div>
      <Navbar url="/bhcTemp" loginUser="true" title="General Checkup" />

      <div className="w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]">
        <div className="mt-24">
          <img src={HeartBeatImg} />
        </div>

        <div className="w-[1440px] mt-[60px] top-[160px] flex flex-col justify-center items-center">
          <div className="">
            <span className="mr-2 font-[600] text-[18px]">Enter Heartbeat</span>
            <span className="text-gray-400 text-[14px]">(in bpm)</span>
          </div>

          <div className="flex justc  items-center">
            <input
            onChange={handleBeat}
              type="text"
              className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4"
              placeholder="80"
            />
          </div>
        </div>

        {/* button */}
        <Link to="/bhcSPO2">
          <button className="mt-[40px] bg-bluebtn py-3 px-12 text-white rounded-lg " onClick={submitBeat}>
            Proceed
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Basichc5;
