// src/components/list.jsx
import React from "react";
import ListItem from "./listItem.jsx";

const List = (props) => {
  return (
    <ul className="list-group" style={{width:"18rem"}}>
      {props.products.slice(props.startIndex, props.startIndex + 5).map((product, index) => (
        <ListItem
          key={index}
          index={index}
          product={product}
          current={props.current}
        />
      ))}
    </ul>
  );
};

export default List;