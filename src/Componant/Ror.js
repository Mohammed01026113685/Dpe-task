import '../App.css';
import axios, { all } from 'axios'
import Heder from './Hedar';
import { useEffect ,useState} from 'react';
import AllProducts from '../Componant/AllProdact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Rouit from './Rouit';
function ROR() {
  const [Product , setProduct]=useState([]);
  const getProdact = async()=>{
    const res=await axios.get('https://dummyjson.com/products')
    setProduct(res.data.products);
  }
  useEffect(()=>{
    getProdact();
  },[])
  return (
  <>
  {/* <Router> */}

        <Routes>
        <Route path="/all" element={ <AllProducts Product={Product}/>} />
        <Route path="/home" element={ <AllProducts Product={Product}/>} />
        </Routes> 
        {/* {/* </Router> */}
        
  </>
  );
}

export default ROR;
