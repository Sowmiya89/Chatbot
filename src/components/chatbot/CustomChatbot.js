import ChatBots from 'react-simple-chatbot';
import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';


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

export default function ChatBot(props) {
    let [isHidden, toggleDisplay] = useState(true);

  const clickEventHandler = usertype => {
        console.log(usertype);
  };

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
           trigger: "Displaying options to eat"
        },
        {
           id: "Displaying options to eat",
           options: [
                      {
                        value: "javascript",
                        label: "Javascript",
                        trigger: "proficiency in javascript"
                      },
                      { 
                        value: "java",
                        label: "Java",
                        trigger: "java"
                      } 
                    ]
        },
        {
           id: "java",
           message: "Sorry,Currently we dont have oppourtunity in {previousValue}.",
           trigger: "Done1"
        },
         {
           id: "proficiency in javascript",
           message: "What is your proficiency in Javascript",
           trigger: "proficiency type"
        },
        {
           id: "proficiency type",
           options: [
                      {
                        value: 'beginner',
                        label: "Beginner",
                         trigger: () => {
                            clickEventHandler("beginner");
                           return "reactproficiency"  
                         }
                      },
                      { 
                        value: "intermediate",
                        label: "Intermediate",
                        trigger: "reactproficiency"
                      },
                      { 
                        value: "expert",
                        label: "Expert",
                        trigger: "reactproficiency"
                      }
                    ]
        },
        {
           id: "reactproficiency",
           message: "How many years of experience do you have in Javascript",
           trigger: "reacttype"
        },
        {
           id: "reacttype",
           options: [
                      {
                        value: 'beginner',
                        label: ">5 Years",
                         trigger: () => {
                          clickEventHandler("beginner");
                          return "Done"  
                         }
                      },
                      { 
                        value: "intermediate",
                        label: "<5 Years",
                        trigger: "Done"
                      },
                      { 
                        value: "expert",
                        label: "<10 years",
                        trigger: "Done"
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

 console.log(props);
    return (
        <>
           <div className="chatbox">
                <ThemeProvider theme={theme}>
                <ChatBots  headerTitle="Atos Syntel PDAC CHATBOT"
                speechSynthesis={{ enable: true, lang: 'en' }}
                eventHandler={clickEventHandler} 
                recognitionEnable={true} steps={steps}/></ThemeProvider>
            </div>
           
        </>
    )
}
