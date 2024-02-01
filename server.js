// require('dotenv').config();
// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// // server used to send send emails
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.get("*", (req, res) => {
//   res.send("Server is running");
// });
// app.listen(3000, () => console.log("Server Running"));
// const EMAIL_USER = process.env.EMAIL_USER;
// const EMAIL_PASS = process.env.EMAIL_PASS;

// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

// // const contactEmail = nodemailer.createTransport({
// //   service: 'gmail',
// //   auth: {
// //     user: "********@gmail.com",
// //     pass: ""
// //   },
// // });
// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: EMAIL_USER,
//     pass: EMAIL_PASS
//   }
// });


// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/contact", (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: name,
//     // to: "********@gmail.com",
//     to: "shivaniproff@gmail.com",
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };
//   // contactEmail.sendMail(mail, (error) => {
//   //   if (error) {
//   //     res.json(error);
//   //   } else {
//   //     res.json({ code: 200, status: "Message Sent" });
//   //   }
//   // });
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       res.status(200).json({ message: 'Message Sent Successfully' });
//     }
//   });

// });

// // const PORT =  3000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use("/", router);
app.listen(3000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "shivaniproff@gmail.com",
    pass: "nmpg kpqn icei doay"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    // to: "shivaniproff@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

