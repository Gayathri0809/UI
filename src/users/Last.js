import React from 'react';
import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import"./final.css";
const Last = () => {
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem('selectedValue'); 
    if (storedValue) {
      setSelectedValue(storedValue);
    }
  }, []);
  let navigate = useNavigate();
  const onClick = async (e) => {
     
      navigate("/rate");
    };

  return (
    
     
      <div className="last">
      
      <img id="image"style={{ height: "300px", width:"300px", transform:"translateX(600px)" ,mixBlendMode:"multiply"}} src="https://cdn.dribbble.com/users/28588/screenshots/3669080/holfuy_done_gifconvert.gif" ></img>
    <h5 id="od">Order Placed Successfully.....</h5>
    
    <button  onClick={(e) => onClick(e)}id="feed">FeedBack</button>
      
      <div >
    <h2 style={{ height: "3px", width:"", transform:"translateX(700px)" }} id='status'>Status of food:<h5  style={{ height: "3px", width:"",fontSize:"30px",color:"green" }}> {selectedValue}</h5></h2>
  </div>
    </div>
   
  );
};

export default Last;