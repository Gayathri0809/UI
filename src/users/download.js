import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import './Download.css'; // Import your new styles
import {  useNavigate } from "react-router-dom";
const Download = () => {
  const [cart, setCart] = useState([]);
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
  useEffect(() => {
    loadList();
  }, []);

  const loadList = async () => {
    try {
      const result = await axios.get("http://localhost:4830/history");
      setCart(result.data);
      alert("success");
    } catch (error) {
      console.error("Error loading list:", error);
      alert("error");
    }
  };

  const handleDownloadPdf = () => {
    if (cart.length === 0) {
      alert("error");
      console.error("Cart is empty. Cannot generate PDF.");
      return;
    }

    const doc = new jsPDF();
    doc.text("Order Details", 10, 10);

    cart.forEach((item, index) => {
      const startY = 20 + index * 20;
      doc.text(`Menu Name: ${item.name}`, 10, startY);
      doc.text(`Price: Rs.${item.price}`, 10, startY + 10);
      doc.addImage(item.images, "JPEG", 10, startY + 20, 50, 50);
    });

    doc.save("order_details.pdf");
  };

  return (
    <div className="confirmation-container">
    <img
      src="https://cdn.dribbble.com/users/147386/screenshots/5315437/success-tick-dribbble.gif"
      alt="Success GIF"
      style={{ width: '300px', height: '300px' }} // Add styles for the success image
    />
    <h1 style={{ color: 'green', fontSize: '24px' }}>Transaction successful!</h1>
    <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px', margin: '5px' }} onClick={handleDownloadPdf}>
      Download Pdf
    </button>
    <button style={{ backgroundColor: 'orange', color: 'white', padding: '10px', margin: '5px' }} onClick={(e) => onClick(e)}>
      FeedBack
    </button>

    <div style={{ marginLeft: '50px' }}>
      <h2 style={{ fontSize: '18px', color: 'blue' }} id="status">
        Status of food:
        <h5 style={{ fontSize: '24px', color: 'green' }}>{selectedValue}</h5>
      </h2>
    </div>
  </div>
);
};

export default Download;
