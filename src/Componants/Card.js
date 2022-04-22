import React from 'react'

export default function Card(props) {
  return (
 
         <div className='card' >
<img src={props.productimage} className='product-img' />
<a href='{#}' className='view-product'>VIEW DETAIL</a>
<span>{props.name}</span>
{/* {props.count} */}
<span>Rs:{props.price}</span>

        </div>

  )
}
