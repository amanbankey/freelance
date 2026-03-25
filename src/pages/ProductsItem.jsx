import React, {} from 'react'
import { useParams } from "react-router-dom";
import Products from '../assets/Images/products.jpg';
import { useLocation } from "react-router-dom";

const ProductsItem = () => {

    const location = useLocation();
    const {id} = useParams();

    const product = location.state 
    const title = decodeURIComponent(id);
     
    console.log("data", product, title);
    
    
  return (
    <div>
        <div className='inset-0'>
            <img src={Products} alt='img'/>
        </div>
         
         <div >
            <img src='https://unsplash.com/photos/the-interior-of-the-metalworking-shop-modern-industrial-enterprise-26l0XGqe2xk' alt='phto'/>
         </div>
    </div>
  )
}

export default ProductsItem