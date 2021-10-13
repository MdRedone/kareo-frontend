import React, { useEffect, useState } from "react";
import "./Home.css";
import {
  Carousel,
  Container,
  Card,
  CardGroup,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import image1 from "../../assets/images/annie-spratt-4-4WPFLVhAY-unsplash.jpg";
import image2 from "../../assets/images/c-d-x-85XLV4Po2mk-unsplash.jpg";
import image3 from "../../assets/images/kyle-gregory-devaras-6RTM8EsD1T8-unsplash.jpg";
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
    <div className="home">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carousel-img"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Build Knowledge</h3>
            <p>
              Knowledge building refers to the process of creating new cognitive
              artifacts.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 carousel-img"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Enrich Thinking</h3>
            <p>
              We can enrich thinking and creative skills to make our child
              expressive.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Show the Capability</h3>
            <p>
              To show the capability of working independently and would expect
              an ambitious graduate.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="mt-3">
        <h1>Our Courses</h1>
        <p>We are offering so many courses. Here are some samples.</p>
      </div>

      {services &&
        services.slice(0, 3).map((item) => (
          <>
            <Container>
              <Row className="pb-4">
                <Col sm={12} md={6} lg={6} xl={6}>
                  <Image className="service-img" src={item.img} />
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} className="right-column">
                  <h2>{item.name}</h2>

                  <Row>
                    <Col md={6} lg={6} xl={6}>
                      <p className="training-price">
                        Online Training Charge:$ {item.servicePrice}
                      </p>
                    </Col>
                    <Col md={6} lg={6} xl={6}>
                      <p className="training-price">
                        Course Rating : $ {item.rating}
                      </p>
                    </Col>
                  </Row>

                  <div className="add-member-btn">
                    <Button>Join Now</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        ))}
    </div>
  );
}

export default Home;
