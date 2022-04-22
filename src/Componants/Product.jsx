import React,{useState} from 'react'
import Card from './Card'
import './Product.css'
export default function Product() {
  const [productdata , setProductdata] = useState([])
  
 
  function getData() {
    fetch(
      `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setProductdata(data.result.products)
        console.log(productdata)
       
      
      });
  }


  return (
 
    <div className='product-list' >
   <button onClick={getData} >Show Data</button>

     {/* {productdata?<Card count={productdata[0].result.count} />:""} */}
     
{productdata.map((item,i)=> <Card name={item.name} productimage={item.image} price={item.price}/>)}
      

{/* <li key={i}>{item.name}</li> */}
    </div>
  
  )
}
