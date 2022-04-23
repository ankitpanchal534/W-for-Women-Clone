import React,{useState} from 'react'
import Card from './Card'
import './Product.css'
export default function Product() {
  
  const [productdata , setProductdata] = useState([])
 
  const getData = ()=> {
    fetch(
      `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if(productdata==""){
      setProductdata(data.result.products)

      }
        else{
        // console.log(productdata)
        console.log(0)  

      }
      
      });
  }
  getData()
  
  return (
 
    <div className='product-list' >
        {/* <button onClick={getData} >Show Data</button> */}
   

     {/* {productdata?<Card count={productdata[0].result.count} />:""} */}
     
{productdata.map((item,i)=> <Card name={item.name} productimage={item.image} price={item.price} key={i}/>)}
      

{/* <li key={i}>{item.name}</li> */}
    </div>
  
  )
}
