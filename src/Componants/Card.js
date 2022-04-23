import React from 'react'
import './Card.css'
export default function Card(props) {
  return (
 
         <div className='card' >
           
<img src={props.productimage} className='product-img' />
<a href='{#}' className='view-product'>VIEW DETAIL</a>
<span className='card-text'>{props.name}</span>
{/* {props.count} */}
<br />
<span className='card-text'>Rs:{props.price}</span>
<span className='size'>Size:&nbsp;&nbsp;&nbsp;6&nbsp;8&nbsp;10&nbsp;12&nbsp;14&nbsp;16&nbsp;18</span>
        </div>

  )
}
