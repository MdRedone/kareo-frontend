import React, { useEffect, useState } from "react";
import "./Home.css";
import Services from "../Services/Services";
function Home() {
  const [services, setServices] = useState([]);

  console.log(services);
  useEffect(() => {
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="row home">
      <div className="col-lg-12 card">
        {/* pass data to service */}
        {services.slice(0, 6).map((service) => (
          <Services key={service.id} service={service}></Services>
        ))}
      </div>
    </div>
  );
}

export default Home;
