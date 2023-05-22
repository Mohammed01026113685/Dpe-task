import React, { useEffect, useState } from 'react';
import './PodactDetails.css'
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
   const productId = useParams(); 
  const [Productid , setProductid]=useState([]);
   const getProdact = async()=>{
    const res=await axios.get(`https://dummyjson.com/products/${productId.id}`)
    setProductid(res.data);
    console.log(res);
  }
  useEffect(()=>{
    getProdact();
  },[])
  const handleClick = (text) => {
    alert(text);
  }
  return (
    <div className='Con'>
        < div className="continer">
          <div className="box">
                    <img src={Productid.thumbnail}/>
                </div>
            <div className="basic-info">
               <h1>{Productid.title}</h1>
               <div className='text'>
                <h2>{Productid.price}$</h2>
                <del>{Productid.discountPercentage}</del>
                </div>
                <h5>{Productid.brand}</h5>
                <h4>{Productid.description}</h4>
                <b> Stock & Availability: {Productid.stock}</b>
                <div>
                                <div  className="colorlayout">
                                <div className='red'></div>
                                <div className='red' id='gr'></div>
                                <div className='red' id='bl'></div>
                            </div>
                                </div>
                                <button id='btn' onClick={() => handleClick('add to cart')}>Add to Cart </button>
                        </div>
        </div>
        </div>
  )
}
export default ProductDetails;