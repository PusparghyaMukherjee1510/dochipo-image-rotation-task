import React from 'react'
import { useState } from 'react';
import './index.css'
function DisPlay() {
  const [angle, setAngle]=useState(0);
  const [rotation, setRotation]=useState(0);

  // const handleChange=()=>{
  //   setAngle(angle=angle+30);
  // }

  const roTate=()=>{
    let newRotation=setRotation(rotation=rotation+30);
    if (newRotation>=360) {
      newRotation=-360;
      setAngle(angle=angle+360);
    } else {
      setRotation(rotation=newRotation);
      setAngle(angle=angle);
    }
  }
  return (
    <div>
        <h1>Image Rotation using React.Js</h1>
      <div className="first_div">
        <div>
          <form>
            <textarea className='angles' value={angle}>
              <sup>o</sup>
            </textarea>
          </form>
        </div>
        <div className="second_div">
           <img className="images"
           src="https://www.datocms-assets.com/14946/1638186862-reactjs.png?auto=format"
           />
        </div>
        <div className="button">
            <button onClick={roTate}>Rotate</button>
        </div>
   </div>
    </div>
  )
}

export default DisPlay;
