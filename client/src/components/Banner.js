import React, { Component } from "react";
const Banner = (props) => {
  console.log(props);
  return (
    <div className="top-img-container" >
      <img className="top-img-exterior" src={props.image} alt="" />
      <div className="top-img-title">{props.name}</div>
    </div>
  );
};

export default Banner;
