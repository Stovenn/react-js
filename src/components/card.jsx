// src/components/card.jsx
import React from "react";

const Card = (props) => {

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.product.productImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.product.productName}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.product.productCategory}</li>
        <li className="list-group-item">{(props.product.productPrice).toFixed(2)} euros</li>
        <li className="list-group-item"><button disabled={!props.product.productStock} onClick={()=>{props.addProduct(props.product)}} className="btn btn-success">Ajouter</button></li>
      </ul>
    </div>
  );
};

export default Card;

