import React, { Component } from "react";
import Enroll from "../enroll/Enroll";
import "../../style.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <Enroll/>
      </div>
    );
  }
}

export default Home;
