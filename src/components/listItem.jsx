// src/components/listItem.js
import React from "react";

const ListItem = (props) => {

  return (
    <li className={`list-group-item ${props.current === props.index ? 'active': ""}`}>
      <><span className="font-weight-bold">{props.product.productName}</span> <span>({props.product.productCategory})</span></>
    </li>
  );
};

export default ListItem;
