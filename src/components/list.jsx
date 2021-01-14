// src/components/list.jsx
import React from "react";
import ListItem from "./listItem.jsx";

const List = (props) => {
  // let start = props.current < 2 ? 0 : props.startIndex
  let end = props.startIndex === props.products.length -1 ? props.start :  props.startIndex +5
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