import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Form from './components/Form';
import InfoDisplay from './components/InfoDisplay';
import {Container, Typography, Alert} from "@mui/material";

function App() {
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState(""); 
  const [info, setInfo] = useState([]);
  const [validate, setValidate] = useState(true);
  const [refreshPage, setRefreshPage] = useState(false);

  const about =
    "Google Cloud Vision API can detect and extract information about entities in an image, upload a image and API will identify their contents";
  const api = "http://localhost:8000/";
  const postApi = `${api}api/post`;
  const getApi = `${api}api/get`;

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    const imageFile = e.target.files[0];
    if(!imageFile)
      setMessage("Please select image.");
      setValidate(false)
      
    if(!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)){
      setMessage("Please select valid image.");
      setValidate(false);
    } else {
      setValidate(true)
      setMessage("")
    }
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post(postApi, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccessMessage("File Uploaded");
      setRefreshPage(true);

    } catch (err) {
      if (err.response.status === 500) 
        setMessage("There was a problem with the server");
      else 
        setMessage(err.response.data.msg);
    }
  };
 
 

 const getInfo = async () => {
  try {
    const response = await axios.get(getApi);
    console.log(response.data);
    setInfo(response.data.result)
  } catch (error) {
    console.error(error);
  }
  setMessage("");
  setSuccessMessage("");
  setFilename("");
  setRefreshPage(false);
 }
  useEffect(() => {
  getInfo();
  },[])

  return (
    <div className="App">
      <Container maxWidth="m">
        <Typography variant="h6" my={5}>
          {about}
        </Typography>
        <Form
          onSubmit={onSubmit}
          onChange={onChange}
          filename={filename}
          validate={validate}
          refreshPage={refreshPage}
          onClick={getInfo}
        />
        {message && <Alert severity="warning">{message}</Alert>}
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {info && <InfoDisplay info={info} api={api} />}
      </Container>
    </div>
  );
}

export default App;
