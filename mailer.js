//server/mailer.js

var path = require("path");
var templatesDir = path.resolve(__dirname, "views/mailer");
var Email = require("email-templates");
require('jsdom-global')()
const mailjet = require("node-mailjet").connect(
  "7903066227fc5ea4d187a061fc1e5f21",
  "d88f4563ed1b73e98886803b79aad6d7"
);

function formatParams(params) {
  return params.map(function (param) {
    return param.param + ':' + param.childParam;
  }).join(', ');
}

function makeUL(array) {
  // Create the list element:
  var list = document.createElement('ul');

  for (var i = 0; i < array.length; i++) {
      // Create the list item:
      var item = document.createElement('li');

      // Set its contents:
      item.appendChild(document.createTextNode(array[i]));

      // Add it to the list:
      list.appendChild(item);
  }

  // Finally, return the constructed list:
  return list;
}

const sendEmail = (messageInfo, text, html) => {
  return mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: { Email: messageInfo.fromEmail, Name: messageInfo.fromName },
        To: [ { Email: messageInfo.toEmail, Name: messageInfo.toName } ],
        Subject: messageInfo.subject,
        TextPart: text,
        HTMLPart: html
      }
    ]
  });
  
};

exports.sendRegistrationEmail = function(templateName, messageInfo, locals, isCandidateEmail) {
  const email = new Email({
   views: { root: templatesDir, options: { extension: "ejs" } }
 });

 if(isCandidateEmail){
   locals.link = 'http://localhost:3000/chatbot?name='+locals.userName+'&email='+locals.email+'&phoneno='+locals.phone_number;
  return Promise.all([
    email.render(`${templateName}/text`, locals)
  ])
    .then(([html, text]) => {
      return sendEmail(messageInfo, text, html);
    })
    .catch(console.error);
 } else {
  locals.link = 'http://localhost:3000/chatbot?name='+locals.userName+'&email='+locals.email+'&phoneno='+locals.phone_number;
  var text = `http://localhost:3000/chatbot?name='+locals.userName+'&email='+locals.email+'&phoneno='+locals.phone_number`;
  locals.whatsAppLink = "https://api.whatsapp.com/send?phone=+91"+locals.phone_number+"&text= HI "+text;
  locals.userName = "Atos Syntel HR Team";
  
  return Promise.all([
    email.render(`${templateName}/hrtemplate`, locals)
  ])
    .then(([html, text]) => {
      return sendEmail(messageInfo, text, html);
    })
    .catch(console.error);
 }

 
};

exports.sendOne = function(templateName, messageInfo, locals) {
   const email = new Email({
    views: { root: templatesDir, options: { extension: "ejs" } }
  });

  return Promise.all([
    email.render(`${templateName}/html`, locals)
    // email.render(`${templateName}/text`, locals)
  ])
    .then(([html, text]) => {
      // Add the contents of options[0] to #foo:
      // document.getElementById('foo').appendChild(makeUL(locals.email)) = html;
      
      // document.getElementById('target').innerHTML = html;
      return sendEmail(messageInfo, text, html);
    })
    .catch(console.error);
};