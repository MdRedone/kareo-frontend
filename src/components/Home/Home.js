/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import "./Home.css";
import { Container } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
function Home() {
  const [file, setFile] = useState(null);

  const UPLOAD_ENDPOINT = "http://localhost:5000/api/file/create";

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await uploadFile(file);
    console.log(res.data);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("files", file);
    // console.log(file);
    return await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  };

  const handleOnChange = (e) => {
    if (e.target.files[0].type === "text/csv") {
      setFile(e.target.files[0]);
    } else {
      alert("Please Enter Excel file");
    }
  };
  return (
    <div className="home mt-5 pt-2">
      <br />
      <br />
      <Container className="mt-1">
        <Form validate="true" onSubmit={handleSubmit}>
          <Form.Label>Upload File</Form.Label>
          <Form.Control
            type="file"
            onChange={handleOnChange}
            required
            name="username"
          />
          <Button type="submit" className="btn-primary mt-2">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Home;
