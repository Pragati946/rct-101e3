import React from "react";
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts=async()=>{
        let r = await fetch("http://localhost:8080/products");
        let d = await r.json();
        setProducts(d);
    };
    fetchProducts();
  
    
  }, []);
  

return (
  <div>Products:{" "}
  <div>
      <Outlet/>

      {products.map((p)=>{
          <div key={p.id}>
              <Link to={`/products/${p.id}`}>{p.name}
              </Link>
            </div>  
      })}
  </div>
<Outlet/>
  </div>
);
};

export default Products;
