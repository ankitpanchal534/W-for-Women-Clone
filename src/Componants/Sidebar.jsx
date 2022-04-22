import React from 'react'
import './Sidebar.css'
import Productpage from './Productpage';

export default function () {
  return (
    <div>
        <div className="sidebar">


            <ul className='filter'> 
            <li><b>   FILTER</b></li>
<li>Category &#9662;</li>
<li><img src='https://wforwoman.com/images/plus_size_Horizontal.png' alt='plus size banner'  style={{width:"280px"}}/>
</li>
<li> Price&#9662; </li>
<li>Size  &#9662;</li>
<li>  Discount &#9662;</li>
<li>  Colour &#9662;</li>
<li>  Material &#9662;</li>
<li> Neck-type  &#9662;</li>
<li> Sleeves &#9662;</li>
<li> Occasion &#9662;</li>
<li>  Length &#9662;</li>
<li> Pattern &#9662; </li>
<li> Toe Type &#9662;</li>
<li> Toe Shape &#9662;</li>
<li> Heel Type &#9662;</li>
<li>Closure  &#9662;</li>
<li> Formulation &#9662;</li>
<li> Coverage &#9662;</li>




            </ul>
            <div className='product-page'>
       <Productpage />
       </div>
        </div>
        
        </div>
  )
}
