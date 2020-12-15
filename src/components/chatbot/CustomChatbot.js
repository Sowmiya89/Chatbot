import ChatBots from 'react-simple-chatbot';
import React, {useState,Component } from 'react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const sendEmail = (email, userName = "Atos Syntel HR Team") => {

  return fetch("/api/send_email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, userName })
  }).then(response => response.json());
};


class ChatBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      yescount:0,
      report: []
  }
  }
  componentDidMount() {
    this.handleEnd = this.handleEnd.bind(this);
  }

    configureEMail(){

    console.log("report",this.state.report);
        const data = {
          data: this.state.report
       };
     sendEmail(data).then(({ message }) => {
        alert(message);
      });
  }

 
  handleEnd({ steps, values }) {
     this.setState({
      report: [ ...this.state.report, {name:values[0]}]
    }, () => {this.configureEMail()});
  }
  
  
 

  

//export default function ChatBot(props)
render() {
   // let [isHidden, toggleDisplay] = useState(true);
   
  const clickEventHandler = usertype => {
        console.log(usertype);
      };
const updatestate =(idno,qsval,ansval)=>{
  var infoArray = [{
    id:idno,
    qs: qsval,
    ans: ansval
}
]
this.setState({
  report: [ ...this.state.report, ...infoArray ]
})
}
const validateresponse=()=>{
  if((this.state.yescount)<7){return "Done";}
  else return "interviewdate";
}
const updateyes=()=>{
this.setState({yescount: this.state.yescount+1});
}
 const steps = [
  {
    id: "Greet",
    message: "Hello, Welcome to atos syntel",
    trigger: "Ask Name"
 },
 {
    id: "Ask Name",
    message: "Please type your name?",
    trigger: "Waiting user input for name"
 },
 {
    id: "Waiting user input for name",
    user: true,
    trigger: "Asking options to eat"
 },
 {
    id: "Asking options to eat",
    message: "Hi {previousValue}, Please select your skill set",
    trigger: () => {
      this.setState({ name: "{previousValue}" })
      updatestate(1,"name",this.state.name);
    // return "Displaying options to eat" 
    return "Displaying options to eat"  
   }
   // trigger: "Displaying options to eat"
 },
 {
    id: "Displaying options to eat",
    options: [
               {
                 value: "javascript",
                 label: "Javascript",
                 trigger: () => {
                  updatestate(2,"skill","javascript");
                 return "javascript"  
               }
                // trigger: "javascript"
               },
               { 
                 value: "java",
                 label: "Java",
                 trigger: () => {
                  updatestate(2,"skill","java");
                 return "java"
                 }
                // trigger: "java"
               } 
             ]
 },
 {
    id: "javascript",
    message: "Sorry,Currently we dont have oppourtunity in {previousValue}.",
    trigger: "Done1"
 },
  {
    id: "java",
    message: "What is your proficiency in {previousValue}?",
    trigger: "proficiency type"
 },
 {
    id: "proficiency type",
    options: [
               {
                 value: 'beginner',
                 label: "Beginner",
                 trigger: () => {
                  updatestate(3,"proficiency","beginner");
                 return "java8"
                 }
                  
               },
               { 
                 value: "intermediate",
                 label: "Intermediate",
                 trigger: () => {
                  updatestate(3,"proficiency","intermediate");
                 return "java8"
                 }
                 //trigger: "java8"
               },
               { 
                 value: "expert",
                 label: "Expert",
                 trigger: () => {
                  updatestate(3,"proficiency","expert");
                 return "java8"
                 }
                // trigger: "java8"
               }
             ]
 },
{
    id: "java8",
    message: "1. Do you have hands on in Java version 8 and above?",
    trigger: "javaans"
 },
 
{
    id: "javaans",
    options: [
               {
                 value: "yes",
                 label: "Yes",
                 trigger: () => {
                  updatestate(4,"Experience in java 8","yes");
                  updateyes();
                 return "OOPS"
                 }
                  
               },
               { 
                 value: "no",
                 label: "No",
                 trigger: () => {
                  updatestate(4,"Experience in java 8","no");
                 return "OOPS"
                 }
              }
             ]
 },
{
    id: "OOPS",
    message: "2. Do you have good knowledge in OOP concepts and design patterns?",
    trigger: "OOPSans"
 },
 
{
    id: "OOPSans",
    options: [
               {
                 value: "yes",
                 label: "Yes",
                 trigger: () => {
                  updatestate(5,"Experience in OOPS","yes");
                  updateyes();
                 return "spring"
                 }
                 
               },
               { 
                 value: "no",
                 label: "No",
                 trigger: () => {
                  updatestate(5,"Experience in OOPS","no");
                 return "spring"
                 }
              }
             ]
 },
{
    id: "spring",
    message: "3. Do you have hands on experience in Spring frameworks?",
    trigger: "springans"
 },
 
{
    id: "springans",
    options: [
               {
                 value: "yes",
                 label: "Yes",
                 trigger: () => {
                  updatestate(6,"Experience in spring","yes");
                  updateyes();
                 return "webservice"
                 }
                 
               },
               { 
                 value: "no",
                 label: "No",
                 trigger: () => {
                  updatestate(6,"Experience in spring","no");
                 return "webservice"
                 }
              }
             ]
 },
{
    id: "webservice",
    message: "4. Do you have knowledge in Web Services? Do you have hands on experience in RESTFul Services?",
    trigger: "webserviceans"
 },
 
{
    id: "webserviceans",
    options: [
               {
                 value: "yes",
                 label: "Yes",
                 trigger: () => {
                  updatestate(7,"Experience in webservices","yes");
                  updateyes();
                 return "db"
                 }
                 
               },
               { 
                 value: "no",
                 label: "No",
                 trigger: () => {
                  updatestate(7,"Experience in webservices","no");
                 return "db"
                 }
              }
             ]
 },
{
    id: "db",
    message: "5. Do you have knowledge in relational databases/No SQL DB in general?",
    trigger: "dbans"
 },
 
{
    id: "dbans",
    options: [
               {
                 value: "yes",
                 label: "Yes",
                 trigger: () => {
                  updatestate(8,"Experience in DB","yes");
                  updateyes();
                 return "logging"
                 }
                 
               },
               { 
                 value: "no",
                 label: "No",
                 trigger: () => {
                  updatestate(8,"Experience in DB","no");
                 return "logging"
                 }
              }
             ]
 },
{
    id: "logging",
    message: "6. Do you have knowledge in Modern Java logging frameworks & Java debugging & Java Profiling tools?",
    trigger: "loggingans"
 },
 
{
    id: "loggingans",
    options: [
               {
                 value: "yes",
                 label: "Yes",
                 trigger: () => {
                  updatestate(9,"Experience in logging","yes");
                  updateyes();
                 return "cors"
                 }
                  
               },
               { 
                 value: "no",
                 label: "No",
                 trigger: () => {
                  updatestate(9,"Experience in logging","no");
                 return "cors"
                 }
              }
             ]
 },
 {
    id: "cors",
    message: "7. Do you have idea about CORS (Cross-Origin) concept?",
    trigger: "corssans"
 },
 
{
    id: "corssans",
    options: [
               {
                 value: "yes",
                 label: "Yes",
                 trigger: () => {
                  updatestate(10,"Experience in CORS","yes");
                  updateyes();
                 return "jdbc"
                 }
                  
               },
               { 
                 value: "no",
                 label: "No",
                 trigger: () => {
                  updatestate(10,"Experience in CORS","no");
                 return "jdbc"
                 }
              }
             ]
 },
 {
    id: "jdbc",
    message: "8. Do you have knowledge on JDBC API components?",
    trigger: "jdbcsans"
 },
 
{
    id: "jdbcsans",
    options: [
               {
                 value: "yes",
                 label: "Yes",
                 trigger: () => {
                  updatestate(11,"Experience in jdbc","yes");
                  updateyes();
                 return "cicd"
                 }
                  
               },
               { 
                 value: "no",
                 label: "No",
                 trigger: () => {
                  updatestate(11,"Experience in jdbc","no");
                 return "cicd"
                 }
              }
             ]
 },
 {
    id: "cicd",
    message: "9. Do you have hands on experience in any CI/CD tools like Jenkins, Bamboo etc?",
    trigger: "cicdsans"
 },
 
{
    id: "cicdsans",
    options: [
               {
                 value: "yes",
                 label: "Yes",
                 trigger: () => {
                  updatestate(12,"Experience in CICD","yes");
                  updateyes();
                 return "microservices"
                 }
                 
               },
               { 
                 value: "no",
                 label: "No",
                 trigger: () => {
                  updatestate(12,"Experience in CICD","no");
                 return "microservices"
                 }
              }
             ]
 },
 
{
    id: "microservices",
    message: "10. Do you have hands on experience in Microservices?",
    trigger: "microservicesans"
 },
 
{
    id: "microservicesans",
    options: [
               {
                 value: "yes",
                 label: "Yes",
                 trigger: () => {
                  updatestate(13,"Experience in microservices","yes");
                  updateyes();
                  return validateresponse();
                 }
                 
               },
               { 
                 value: "no",
                 label: "No",
                 trigger: () => {
                  updatestate(13,"Experience in microservices","no");
                  return validateresponse();
                 }
              }
             ]
 },
 
{
    id: "interviewdate",
    message: "What is your preferred interview date?",
    trigger: "dates"
 },
 {
    id: "dates",
    options: [
               {
                 value: '15dec',
                 label: "15 Dec 2020",
                  trigger: () => {
                    updatestate(14,"Interview date","15dec");
                   return "Done"  
                  }
               },
               {
                value: '16dec',
                label: "16 Dec 2020",
                 trigger: () => {
                   updatestate(14,"Interview date","16dec");
                  return "Done"  
                 }
              },
              {
                value: '17dec',
                label: "17 Dec 2020",
                 trigger: () => {
                   updatestate(14,"Interview date","17dec");
                  return "Done"  
                 }
              }
             ]
 },
  {
     id: "Done1",
     message: "Thank you. Have a great day !!",
     end: true
 },        
 {
     id: "Done",
     message: "Our HR will contact you, Thank you. Have a great day !!",
     end: true
 }
];

 //console.log(props);
 console.log(this.state.report);
 console.log(this.state.yescount);
    return (
        <>
           <div className="chatbox">
                <ThemeProvider theme={theme}>
                <ChatBots  
                handleEnd={this.handleEnd}
                headerTitle="Atos Syntel PDAC CHATBOT"
                speechSynthesis={{ enable: true, lang: 'en' }}
                eventHandler={clickEventHandler} 
                recognitionEnable={true} steps={steps}/></ThemeProvider>
            </div>
           
        </>
    );
}
}
export default ChatBot;
