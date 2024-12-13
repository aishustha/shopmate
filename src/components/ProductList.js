import { useCallback, useEffect, useState } from "react"
import { useFetch } from "./hooks/useFetch";
import "./ProductList.css";

export const ProductList = () => {
    const [url, setUrl] = useState("http://localhost:3001/products");
 
    const {data: products, loading, error} = useFetch(url, {content: "ABC"});

    // useEffect(() => {
    //   fetch(url)
    //   .then(response => response.json())
    //   .then(data => setProducts(data));
    // }, [url]);

    // const fetchProducts = useCallback(async () => {
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   setProducts(data);
    // }, [url]); 

    // useEffect(() => {
    //   fetchProducts();
    // }, [fetchProducts]);


  return (
    <section className="listCard">
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:3001/products")}>All</button>
        <button onClick={() => setUrl("http://localhost:3001/products?in_stock=true")}>In Stock Only</button>
      </div>

      {loading && <p>Loading Products...</p>}
      {error && <p>{error} </p>}
      {products && products.map((product) => (
        <div className="card" key={product.id}>
            <p className="id"><span>{product.id}</span></p>
            <p className="name">{product.name}</p>
            <p className="info">
              <span>${product.price}</span>
              <span className={product.in_stock ? "instock" : "unavailable"}> {product.in_stock ? "In Stock" : "Unavailable"}</span>
            </p>
        </div> 
      ))}
    </section>
  )
}
