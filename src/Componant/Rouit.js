import Heder from './Hedar';
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
 function Rouit() {
  return (
    <>
     <Routes>
\        <Route path="/" element={<Heder/>}/>
        </Routes> 
     <Heder/>
   </>
  );
};
export default Rouit;