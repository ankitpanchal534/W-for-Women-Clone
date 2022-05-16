import React from "react";
import Product from "./Product";
import "./Productpage.css";

export default function () {
  return (
   
      <div className="Products-page">
        <div className="heading-line">
          <span>1977 Items</span>
          <select>
            <option>Newest</option>
            <option>Price(Low to High)</option>
            <option>Price(High to Low)</option>
            <option>Discount</option>
          </select>
        </div>
      <Product />
    
      
    </div>
  );
}
