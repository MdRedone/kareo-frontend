/* eslint-disable no-lone-blocks */
import React, { useState } from 'react'
import './Home.css'
import { Container } from 'react-bootstrap'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
function Home () {
  const [file, setFile] = useState(null)
  console.log(file)
  const UPLOAD_ENDPOINT = 'http://localhost:5000/api/file/create'

  const handleSubmit = async e => {
    e.preventDefault()
    await uploadFile(file)
  }

  const processCSV = async (str, delim = ',') => {
    const headers = str.slice(0, str.indexOf('\n')).split(delim)
    const rows = str.slice(str.indexOf('\n') + 1).split('\n')

    const newArray = rows.map(row => {
      const values = row.split(delim)
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i]
        return obj
      }, {})
      return eachObject
    })

    return await axios.post(UPLOAD_ENDPOINT, newArray)
  }

  const uploadFile = async file => {
    const reader = new FileReader()

    reader.onload = function (e) {
      const text = e.target.result
      processCSV(text)
    }

    reader.readAsText(file)
  }

  const handleOnChange = e => {
    if (e.target.files[0].type === 'text/csv') {
      setFile(e.target.files[0])
    } else {
      alert('Please Enter Excel file')
    }
  }
  return (
    <div className='home mt-5 pt-2'>
      <br />
      <br />
      <Container className='mt-1'>
        <Form validate='true' onSubmit={handleSubmit}>
          <Form.Label>Upload File</Form.Label>
          <Form.Control
            type='file'
            onChange={handleOnChange}
            required
            name='username'
          />
          <Button type='submit' className='btn-primary mt-2'>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default Home
