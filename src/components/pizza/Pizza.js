import React, { Component } from "react";
import "./Pizza.css";
import CustomChatbot from "../chatbot/CustomChatbot";
import Enroll from "../enroll/Enroll";

import Button from "@material-ui/core/Button";

class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
       chatbox: "",
    };
  }

  render() {
    return (
      <div>
        <CustomChatbot /> 
      </div>
    );
  }
}

export default Pizza;
