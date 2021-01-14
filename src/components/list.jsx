// src/components/list.jsx
import React from "react";
import ListItem from "./listItem.jsx";

const List = (props) => {
  const end = props.products.length === 1 ? 1 : props.startIndex + 5 
  console.log(end)
  return (
    <ul className="list-group" style={{width:"18rem"}}>
      {props.products.slice(props.startIndex, end).map((product, index) => (
        <ListItem
          key={index}
          index={index}
          product={product}
          current={props.products.length === 1 ? 0 : props.current}
        />
      ))}
    </ul>
  );
};

export default List;