const nodemailer = require('nodemailer');
const fs = require('fs');
const pdf = require('pdf-parse');

//set email configs in here
const transporter = nodemailer.createTransport({
  //add more services if you are sending to multiple emails
  service: 'Gmail', 
  auth: {
    //email used to send the mail
    user: 'helloworldmario01@gmail.com', 
    //password needs to be generated similar to a 2 factor authentication
    pass: 'uqll fqdf goce klrr' 

  }
});

const mailOptions = {
  from: 'helloworldmario01@gmail.com',
  to: 'mahmoudalqaisi02@gmail.com',
  subject: 'TESTING 1010101010',
  text: 'Hello, this is the body of your email.',
  attachments: [
    {
      filename: 'sample.pdf', 
      path: 'websitelink', 
    },
  ],
};


// Send the email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent successfully!', info.response);
  }
});




// //this will read the pdf file and extract the email from it:
// const extractEmailAddress(filePath) {

//   try {
//     // Read the PDF file
//     const dataBuffer = fs.readFileSync(pdfFilePath);
//     const data = await pdf(dataBuffer);

//     // Extract email addresses using a regular expression
//     const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
//     const emailAddresses = data.text.match(emailRegex);

//     return emailAddresses || [];
//   } catch (error) {
//     console.error('Error extracting email addresses:', error);
//     return [];
//   }
// }
// const pdfFilePath = 'path/to/your/pdf-file.pdf'; // Replace with the actual PDF file path
// const emailAddresses = await extractEmailAddress(pdfFilePath);

// console.log('Extracted Email Addresses:', emailAddresses);
