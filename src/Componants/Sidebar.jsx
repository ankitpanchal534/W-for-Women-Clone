import React from 'react'
import './Sidebar.css'
import Productpage from './Productpage';

export default function () {
  return (
    <div>
        <div className="sidebar">


            <ul className='filter'> 
            <li><b>   FILTER</b></li>
<li><details >  
  <summary> 
  Category
  </summary>
  <input type="checkbox" />Loading...
  </details> </li>
<li><img src='https://wforwoman.com/images/plus_size_Horizontal.png' alt='plus size banner'  style={{width:"280px"}}/>
</li>
<li>
<details >  
  <summary> 
  Price
  </summary>
  <input type="checkbox" />Loading...
  </details></li>
<li><details >  
  <summary> 
  Size
  </summary>
  <input type="checkbox" />Loading...
  </details></li>
<li>  <details >  
  <summary> 
  Discount
  </summary>
  <input type="checkbox" />Loading...
  </details> </li>
<li>  <details >  
  <summary> 
  Colour
  </summary>
  <input type="checkbox" />Loading...
  </details> </li>
<li>  <details >  
  <summary> 
  Meterial
  </summary>
  <input type="checkbox" />Loading...
  </details> </li>
<li><details >  
  <summary> 
  Neck-Type
  </summary>
  <input type="checkbox" />Loading...
  </details>  </li>
<li> <details >  
  <summary> 
  Sleeves
  </summary>
  <input type="checkbox" />Loading...
  </details> </li>
<li> <details >  
  <summary> 
  Occation
  </summary>
  <input type="checkbox" />Loading...
  </details> </li>
<li>  <details >  
  <summary> 
  Length
  </summary>
  <input type="checkbox" />Loading...
  </details> </li>
<li><details >  
  <summary> 
  Pattern
  </summary>
  <input type="checkbox" />Loading...
  </details>  </li>
<li> <details >  
  <summary> 
  Toe-type
  </summary>
  <input type="checkbox" />Loading...
  </details> </li>
<li> <details >  
  <summary> 
  Toe-Shape
  </summary>
  <input type="checkbox" />Loading...
  </details> </li>
<li> <details >  
  <summary> 
  Heel Size
  </summary>
  <input type="checkbox" />Loading...
  </details> </li>
<li><details >  
  <summary> 
Closure  </summary>
  <input type="checkbox" />Loading...
  </details>  </li>
<li> <details >  
  <summary> 
Formulation  </summary>
  <input type="checkbox" />Loading...
  </details> </li>
<li> <details >  
  <summary> 
  Coverage
  </summary>
  <input type="checkbox" />Loading...
  </details> </li>




            </ul>
            <div className='product-page'>
       <Productpage />
       </div>
        </div>
        
        </div>
  )
}
