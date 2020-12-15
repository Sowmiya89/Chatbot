import React, { Component } from "react";
import "./App.css";
import Home from "./components/home/Home";
import CustomChatbot from "./components/chatbot/CustomChatbot";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/chatbot" component={CustomChatbot} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
