import React, { useEffect, useState } from "react";
import "./AllServices.css";
function AllServices() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [servicePage, setServicePage] = useState([]);
  console.log(servicePage);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => {
        setServicePage(data);
      });
  }, []);
  return (
    <div className="row">
      <div className="col-lg-12 service-item">
        {/* all service show */}
        {servicePage.map((service) => (
          <div key={service.id} className="single-item">
            <img src={service.img} alt="" />
            <h4 className="service-name">{service.name}</h4>
            <p>
              Service Price:<span>$</span> {service.servicePrice}
            </p>
            <p>Rating: {service.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllServices;
