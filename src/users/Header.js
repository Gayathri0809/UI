import React from "react";
//import {NavLink} from "react-router-dom";


function Header()
{
    return(
        <div>

<nav data-aos="slide-down" data-aos-duration="1000" class="navbar navbar-expand-md navbar-light fixed-top bg-white px-sm-5 shadow py-3 aline-items-center">
            <div class="container-fluid">
              <a class="navbar-brand brand fw-bold" style={{color: 'green'}} href="/home"><i class="fad fa-pizza mr-5"></i>PizzaOrderingSystem</a>
          
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse d-md-flex justify-content-end navbar-collapse " id="navbarTogglerDemo02">
                <ul class="navbar-nav navigations">
                  <li class="nav-item "> <a class="nav-link active" aria-current="page" href="/home">Home</a></li>
                 
                   <li class="nav-item "> <a class="nav-link" aria-current="page" href="/product">Products</a></li>
                   
                  <li class="nav-item "> <a class="nav-link" aria-current="page" href="/cart">Cart</a></li>
                  <li class="nav-item "> <a class="nav-link" aria-current="page" href="/">Logout</a></li>
          
                 
                </ul>
                
              </div>
            </div>
          </nav>
        
</div>
        
    )
}
export default Header;
/*
<li class="nav-item "> <a class="nav-link" aria-current="page" href="/login">Login</a></li>
                   
                  <li class="nav-item "> <a class="nav-link" aria-current="page" href="/registration">Sign Up</a></li>*/