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
        <div style={{ textAlign: "center", margin:"10px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.setState({ chatbox: "google" })}
          >
            Google dialogflow
          </Button>
          <Button
            style={{ marginLeft: 30 }}
            variant="contained"
            color="primary"
            onClick={() => this.setState({ chatbox: "react" })}
          >
            Custom ChatBot
          </Button>
           <Button
            style={{ marginLeft: 30 }}
            variant="contained"
            color="primary"
            onClick={() => this.setState({ chatbox: "form" })}
          >
            Registeration Form
          </Button>
        </div>
        {this.state.chatbox ==="google" ? (
          <iframe
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/078c0d24-fcf6-4e7c-b0e8-f4552eeeb411"
          ></iframe>
        ) : null}

        {this.state.chatbox ==="react"  ? <CustomChatbot /> : null}
        {this.state.chatbox ==="form"  ? <Enroll /> : null}
      </div>
    );
  }
}

export default Pizza;
