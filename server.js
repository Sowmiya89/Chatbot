const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.use(express.json()); /* Parse json in request */

/* Priority serve any static files */
// app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

// app.get("/api/send_email", function(req, res) {
//   res.set("Content-Type", "application/json");
//   res.send('{"message":"Email sent."}');
// });

const mailer = require("./mailer"); 

app.post("/api/send_email", function(req, res) {
  res.set("Content-Type", "application/json");
  
  const locals = { 
    userName: req.body.userName,
    email: req.body.email
  };
  const messageInfo = {
    email: req.body.email, fromEmail: "manikandan.atossyntel@gmail.com",
    toEmail: 'kalaivani9963@gmail.com',
    toName: 'Atos Syntel HR Team',
    fromName: "ChatBot Team", subject: "Candidate details for L0 Interview Process"
  };
  mailer.sendOne("droids", messageInfo, locals);

  res.send('{"message":"Email sent."}');
});

/* All remaining requests return the React app, so it can handle routing. */ 
// app.get("*", function(request, response) {
//   response.sendFile(path.resolve(__dirname, "../react-ui/build", "index.html"));
// });