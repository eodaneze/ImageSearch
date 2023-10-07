import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Form } from 'react-bootstrap';

const App = () => {
  return (
    <div className="container">
        <h1 className="title">Image Search</h1>
        <div className="search-section">
          <Form.Control type='password' placeholder='' />
        </div>
    </div>
  )
}

export default App
