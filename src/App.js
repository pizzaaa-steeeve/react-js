import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Comp/form";
import React from "react";
import Navbar from "./Comp/navbar";




function App() {
  return (
      <React.Fragment>
          <Navbar/>
        <Form/>

      </React.Fragment>
  )
}

export default App;
