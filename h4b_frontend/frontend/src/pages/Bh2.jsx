import React,{useState} from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Bh2 = () => {
  const[color,setColor]=useState(false);
  const [selectedButtons, setSelectedButtons] = useState([]);

  // Function to handle button clicks
  const handleButtonClick = (buttonValue) => {
    // Check if the button is already selected
    if (selectedButtons.includes(buttonValue)) {
      // If selected, remove it from the array
      setColor(false);
      setSelectedButtons(selectedButtons.filter((value) => value !== buttonValue));
    } else {
      // If not selected, add it to the array
      setColor(true);
      setSelectedButtons([...selectedButtons, buttonValue]);
    }
  };
  const sendSelected=async()=>{
      const final=await fetch('https://sehat-backend.onrender.com/api/selectedButtons',{
        method:"POST",
        headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(selectedButtons)
    })
      if (final.ok){
        console.log(final)
      }
  }
  // An array of button values
  const buttonValues = ["Fatigue", "Nausea", "Headache","Abdominal Pain","Loss of Appetite","Vomiting","Weakness","Fever","Joint and Muscle Pain","Sensitivity to Light","Cough","Diarrhea"];
  return (
    <div>
    <Navbar url="/bhcBP" loginUser="true" title="Body Health" />

    <div className="w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]">
      
      <div className=" mt-[60px] top-[160px] flex flex-col justify-center items-center">
        <div className="">
          <span className="mr-2 font-[600] text-[18px]">
            Please select the problems you are facing
          </span>
        </div>
      </div>

{/* all problems */}
<div className='mt-10'>
      {buttonValues.map((buttonValue, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(buttonValue)}
          className={selectedButtons.includes(buttonValue) ? 'selected' : 'notselected'}
        // className='w-[200px] bg-[#DEF0FF] py-2 mx-20 my-4 rounded-full'
        >
          {buttonValue}
        </button>
      ))}

      {/* to see btns selected */}
      <div className='w-[100vw] flex flex-col text-center mt-10 h-[20vh]'>
        <p className='text-[#228b22]'>Selected Problems:</p>
        <ul className='flex mx-auto my-4'>
          {selectedButtons.map((button, index) => (
            <li className=' mx-2 ' key={index}>{button}</li>
          ))}
        </ul>
      </div>
    </div>
      
      <Link to="/body">
        <button className="mt-[40px] bg-bluebtn py-3 px-12 text-white rounded-lg right-[60px] bottom-[60px] fixed" onClick={sendSelected}>
          Next
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Bh2