import { useState } from "react";
import { Link } from "react-router-dom";


import "./POrdact.css"

function Products(Pro) {
  const [isActive, setIsActive] = useState(false);
  
  const handleClick = function() {
    setIsActive(!isActive);
  };
  return (
    <>
    <div id="products-container">    
        <div className="product">
         <Link to={`/products/${Pro.Pro.id}`}>
         <img src={(Pro.Pro.thumbnail)} alt={Pro.name} />
         </Link> 
         <div id="sv">
         <svg      viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path  className={isActive ? 'active' : 'inactive'} onClick={handleClick}stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 4c-3.2 0-5 2.667-5 4 0-1.333-1.8-4-5-4S3 6.667 3 8c0 7 9 12 9 12s9-5 9-12c0-1.333-.8-4-4-4z"></path></g></svg>
         </div>
                   <div className="cardbody">
            <div id="cardText">
            <h2>{Pro.Pro.title}</h2>
            <b>${Pro.Pro.price}</b>
            </div>
            <p>{Pro.Pro.description}</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default Products;