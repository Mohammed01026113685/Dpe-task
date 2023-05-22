import { Link } from "react-router-dom";
import "./POrdact.css"

function Products(Pro) {
  return (
    <>
    <div id="products-container">    
        <div className="product">
         <Link to={`/products/${Pro.Pro.id}`}>
         <img src={(Pro.Pro.thumbnail)} alt={Pro.name} />
         </Link> 
          <div className="cardbody">
            <h2>{Pro.Pro.title}</h2>
            <b>${Pro.Pro.price}</b>
            </div>
            <p>{Pro.Pro.description}</p>
        </div>
    </div>
    </>
  );
}

export default Products;