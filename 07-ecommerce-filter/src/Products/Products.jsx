import React from 'react';
import data from '../db/Data.js'
import "./product.css";

function Product(props) {
  const { img, title, star, reviews, prevPrice, newPrice, company, color, category } = props.products;
  return (
   
      <div className="card">
        <img src={img} alt="Shes" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <p className="rating">{star} <span>{reviews}</span></p>
          <div className="price">
            {prevPrice} -- {newPrice}
          </div>
          <div className="brand">
            <p>{company}</p>
          </div>
          <div className="color"><span>{color}</span></div>
          <div className="category">{category}</div>
        </div>
      </div>
  );
}

function Products() {
  return (
    <>
     <div className="product-card">
     {data.map((product) => (
        <Product key={product.title} products={product} />
      ))}
     </div>
     
    </>
  );
}

export default Products;
