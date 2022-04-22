import React from 'react'
import { BsSearch } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { RiUser3Line } from "react-icons/ri";
import './Header.css'
export default function Header() {
  return (
    <div>
    <div className='header'>
<img src='https://wforwoman.com/images/logo.png' style={{height:"75px",}} />

<div className='item-list'>
    <ul  className='item-list'>
<li className='li-new-in'>
    NEW IN
    <div className='hidden-box'>
       <li>KURTA
           </li>
       <li>TOP
           </li>
 </div>

   
</li>
<li>
    TOP WEAR
</li>
<li>
    BOTTOM WEAR
</li>
<li>
    COSMETICS
    </li>
<li>
    BOTTOM WEAR
</li>
<li>
    FOOTWEAR
</li>
<li>
    WINTER WEAR
</li>
<li>
    DRAPES
</li>
<li>
    WISHFUL
</li>
<li>
    SALE
</li>
</ul>
</div>
<div className='search-box'>
    <input placeholder='Search' id='input-box'/>
    <BsSearch style={{width:"20px",height:"30px"}} />
</div>

<div className='cart-login'>
    <div >
    <CgShoppingBag />
    CART
    </div>
    <div>
 <RiUser3Line />
 LOGIN
 </div>
</div>
    </div>
  
    </div>
  )
}
