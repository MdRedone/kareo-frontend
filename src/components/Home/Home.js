/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import "./Home.css";
import { Container } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
function Home() {
  const [file, setFile] = useState(null);
  const [showResponseData, setShowResponseData] = useState([]);
  const FILE_UPLOAD_ENDPOINT = "http://127.0.0.1:8000/addpatient";

  const handleSubmit = async (e) => {
    e.preventDefault();

    await uploadFile(file);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("csv_file", file);
    const result = await axios.post(FILE_UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    setShowResponseData(result?.data);
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

        <br />
        <div>
          {showResponseData.length >= 0 &&
            showResponseData?.map((i, id) => (
              <>
                <div key={id}>{i}</div>
              </>
            ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
