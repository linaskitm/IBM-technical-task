import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Form from './components/Form';
import InfoDisplay from './components/InfoDisplay';

function App() {
  const [message, setMessage] = useState('Waiting');
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState(""); 
  const [info, setInfo] = useState([])


  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

const postApi = "https://ibm-technical-task-api.herokuapp.com/api/post";

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(postApi, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("File Uploaded");

    } catch (err) {
      if (err.response.status === 500) 
        setMessage("There was a problem with the server");
      else 
        setMessage(err.response.data.msg);
    }
  };
const getApi = "https://ibm-technical-task-api.herokuapp.com/api/get";
const api = "https://ibm-technical-task-api.herokuapp.com/";

 const getInfo = async () => {
  try {
    const response = await axios.get(getApi);
    console.log(response.data);
    setInfo(response.data.result)
  } catch (error) {
    console.error(error);
  }
}
useEffect(() => {
getInfo();
},[])



  
  return (
    <div className="App">
      <h2>{message}</h2>
      <Form onSubmit={onSubmit} onChange={onChange} filename={filename} />

      {info && <InfoDisplay info={info} api={api} />}
    </div>
  );
}

export default App;
