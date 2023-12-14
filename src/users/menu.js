import React, { useState, useEffect } from "react";
 
import { Link } from "react-router-dom";
import { Filter, Translate } from "@mui/icons-material";
import axios from "axios";
axios.interceptors.request.use(
    (config) => {
      const jwtToken = localStorage.getItem('jwtToken');
  
      // Check if the request requires authentication
      if (config.headers.Authorization === undefined && jwtToken) {
        // Include the token if it's present in the localStorage
        config.headers.Authorization = `Bearer ${jwtToken}`;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
function Menu() {
  const [data, setData] = useState([]);
  const [userData, setUserdata]= useState([]);
  const [filterdata, setFilterdata]= useState([]);
  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
 
  useEffect(() => {
    const getUserdata = async () => {
      try {
        const response = await axios.get("http://localhost:4830/list");
        setUserdata(response.data);
        setFilterdata(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

getUserdata();
  },[]);
  const handlesearch=(event)=>{
    const getSearch= event.target.value;
    if(getSearch.length > 0)
    {     
const searchdata= userData.filter( (item)=> item.name.toLowerCase().includes(getSearch));
     setUserdata(searchdata);
    } else {
      setUserdata(filterdata);
    }
    setQuery(getSearch);
  }
  
 /* const addToCart = async (item) => {
    try {
      
const cartResponse = await axios('http://localhost:4830/history');
      if (!cartResponse.ok) {
        throw new Error('Failed to fetch cart data');
      }
    const cartItems = await cartResponse.json();
const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);
  
      if (existingItem) {
      
        alert('Product already in the cart');
        return;
      }
      const addItemToCart = async (item) => {
        try {
          const response = await axios.post('http://localhost:4830/history', item, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.status === 200) {
            alert('Product added to the cart');
          } else {
            console.error('Failed to add product to the cart:', response.statusText);
            alert('Failed to add product to the cart');
          }
        } catch (error) {
          console.error('Error adding product to the cart:', error);
          alert('Error adding product to the cart');
        }
      };*/
      const getCartData = async () => {
        try {
          const cartResponse = await axios.get('http://localhost:4830/history');
      
          if (cartResponse.status !== 200) {
            throw new Error('Failed to fetch cart data');
          }
      
          return cartResponse.data;
        } catch (error) {
          console.error('Error fetching cart data:', error);
          throw new Error('Failed to fetch cart data');
        }
      };
      
      const addToCart = async (item) => {
        try {
          const cartItems = await getCartData();
      
          const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);
      
          if (existingItem) {
            alert('Product already in the cart');
            return;
          }
      
          await addItemToCart(item);
        } catch (error) {
          console.error('Error checking or adding product to the cart:', error);
          alert('Error checking or adding product to the cart');
        }
      };
      
      const addItemToCart = async (item) => {
        try {
          const response = await axios.post('http://localhost:4830/history', item, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.status === 200) {
            alert('Product added to the cart');
          } else {
            console.error('Failed to add product to the cart:', response.statusText);
            alert('Failed to add product to the cart');
          }
        } catch (error) {
          console.error('Error adding product to the cart:', error);
          alert('Error adding product to the cart');
        }
      };
      
  
  const sortPrices = (selectedOrder) => {
    const sortedData = [...userData].sort((a, b) => {
      if (selectedOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
 
    setUserdata(sortedData);
    setSortOrder(selectedOrder);
  };
 
 
  return (
   /* <div>
      <div className="row">
        <div className="col-md-3">
      <Link
        className="btn btn-outline-primary mx-4 mt-2"
        to={`/cart`}
      >
        View Cart
      </Link>
      </div>
            <div className="col-md-3 mt-2">                
                <input  type="text" name='name' value={query}   className="form-control" onChange={(e)=>handlesearch(e)} placeholder='Search...' />
              </div>
     </div>
    
     <div className="col-md-3 mt-4 ml-2">
          <select
            className="form-select"
            onChange={(e) => sortPrices(e.target.value)}
            value={sortOrder}
          >
            <option value="">Sort</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>*/
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Your Logo
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                View Cart
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-2 mt-2 mr-2 p-2">
          <input
            type="text"
            name="name"
            value={query}
            className="form-control"
            onChange={(e) => handlesearch(e)}
            placeholder="Search..."
          />
        </div>
        <div className="col-md-2 mt-2 ml-2 mr-3">
          <select
            className="form-select form-select-sm" // Added form-select-sm for smaller size
            onChange={(e) => sortPrices(e.target.value)}
            value={sortOrder}
          >
            <option value="">Sort</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>
    </nav>
  
 
      <table class="table  mt-5">
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, index) => (        
          <tr>
             <td ><img src={item.images} style={{ height: "150px", width:"150px"}} id="bb1" ></img></td>
             <td>
                      <div style={{ display: 'block',gap:'50px'}}>
                        <tr style={{ fontSize:"20px",display: 'flex',justifyContent:"space-between" }}>
{item.name}
                        <button
               class="btn btn-outline-danger " style={{ background:"none", color:"red"}}
               onClick={() => addToCart(item)}
             >
               ADD &nbsp; +
             </button>
             </tr>
            </div>
            <tr style={{color:"black"}}>Rs.{item.price}</tr>
            <tr style={{color:"grey"}}>{item.description}</tr>              
            </td>      
         </tr>
         ))}
      </tbody>
     </table >
 
  </>
    )
}
export default Menu; 