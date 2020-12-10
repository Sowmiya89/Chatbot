import React, { Component } from "react";
import "./Pizza.css";
import CustomChatbot from "../chatbot/CustomChatbot";
import Button from "@material-ui/core/Button";

class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGoogleDialogFlow: false,
      showCustomDialogFlow: false,
    };
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.setState({ showGoogleDialogFlow: true })}
          >
            Google dialogflow
          </Button>
          <Button
            style={{ marginLeft: 30 }}
            variant="contained"
            color="primary"
            onClick={() => this.setState({ showCustomDialogFlow: true })}
          >
            Custom ChatBot
          </Button>
        </div>
        {this.state.showGoogleDialogFlow ? (
          <iframe
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/078c0d24-fcf6-4e7c-b0e8-f4552eeeb411"
          ></iframe>
        ) : null}

        {this.state.showCustomDialogFlow ? <CustomChatbot /> : null}
      </div>
    );
  }
}

export default Pizza;
