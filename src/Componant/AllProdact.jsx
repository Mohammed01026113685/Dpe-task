
// import { useState } from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import Heder from './Hedar';
// import "./POrdact.css";

// import Products from "./ProdactListe";


// const AllProducts = ({ Product }) => {
//   const [showAll, setShowAll] = useState(false);
//   const productsToDisplay = showAll ? Product : Product.slice(0, 8);

//   function handleShowAllClick() {
//     setShowAll(true);
//   }

//   return (
//     <>
//   <Heder/>
//       <div className="contenar">
//         {productsToDisplay.map((Pro) => (
//           <Products key={Pro.id} Pro={Pro} />
//         ))}
//         {!showAll && (
//           <Link className='Lin' to="/all" onClick={handleShowAllClick}>
//             Show all products
//           </Link>
          
//         )
//         }
        
//       </div>
//     </>
//   );
// };

// export default AllProducts;


import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Heder from './Hedar';
import "./POrdact.css";

import Products from "./ProdactListe";


const AllProducts = ({ Product }) => {
  const [showAll, setShowAll] = useState(false);
  const productsToDisplay = showAll ? Product : Product.slice(0, 8);

  function handleShowAllClick() {
    setShowAll(true);
  }

  return (
    <>
      {productsToDisplay.length <= 8 && <Heder/> ||<h1>Prodact</h1>}
      <div className="contenar">
        {productsToDisplay.map((Pro) => (
          <Products key={Pro.id} Pro={Pro} />
        ))}
        {!showAll && ( 
          <Link className='Lin' to="/all" onClick={handleShowAllClick}>
            Show all products
          </Link>
        )}
      </div>
    </>
  );
};

export default AllProducts;