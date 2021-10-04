import React from "react";
import "./Services.css";
function Services(props) {
  const { name, servicePrice, rating, img } = props.service;
  console.log(name);
  return (
    <div className="service">
      {/* services content */}
      <img src={img} alt="" />
      <h4 className="service-name">{name}</h4>

      <p>
        Service Sell:<span>$</span> {servicePrice}
      </p>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default Services;
