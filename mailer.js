//server/mailer.js

var path = require("path");
var templatesDir = path.resolve(__dirname, "views/mailer");
var Email = require("email-templates");

const mailjet = require("node-mailjet").connect(
  "7903066227fc5ea4d187a061fc1e5f21",
  "d88f4563ed1b73e98886803b79aad6d7"
);

const sendEmail = (messageInfo, text, html) => {
  return mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: { Email: messageInfo.fromEmail, Name: messageInfo.fromName },
        To: [ { Email: messageInfo.toEmail } ],
        Subject: messageInfo.subject,
        TextPart: text,
        HTMLPart: html
      }
    ]
  });
  
};

exports.sendOne = function(templateName, messageInfo, locals) {
   const email = new Email({
    views: { root: templatesDir, options: { extension: "ejs" } }
  });

  return Promise.all([
    email.render(`${templateName}/html`, locals),
    email.render(`${templateName}/text`, locals)
  ])
    .then(([html, text]) => {
      return sendEmail(messageInfo, text, html);
    })
    .catch(console.error);
};