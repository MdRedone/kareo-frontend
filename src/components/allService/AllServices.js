import React, { useEffect, useState } from "react";
import "./AllServices.css";
import { Col, Image, Row, Button, Container, ListGroup } from "react-bootstrap";
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
    <div>
      <Container>
        <h1 className="service">Services</h1>
      </Container>
      {servicePage &&
        servicePage.map((item) => (
          <>
            <Container>
              <Row className="pb-4">
                <Col sm={12} md={6} lg={6} xl={6}>
                  <Image className="service-img" src={item.img} />
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} className="right-column">
                  <ListGroup vertical>
                    <ListGroup.Item>
                      <h2>{item.name}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={{ float: "left" }}>
                        Online Training Charge:$ {item.servicePrice}
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={{ float: "left" }}>
                        Course Rating : $ {item.rating}
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
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

export default AllServices;
