// src/components/list.jsx
import React from "react";
import ListItem from "./listItem.jsx";

const List = (props) => {
  const end = props.startIndex + 5 
  console.log(end)
  return (
    <ul className="list-group" style={{width:"18rem"}}>
      {props.products.slice(props.startIndex, end).map((product, index) => (
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