import React, { useState } from 'react';
import './App.css';
import { Alert, Button } from 'react-bootstrap';
import Details from './pages/Details';
import "./scss/main.scss";

function App() {
  const [show, setShow] = useState(true);
  return (
    <Details />
  );
}

export default App;
