require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration to allow localhost and live domain
const allowedOrigins = [
  "http://localhost:5173", // Vite dev server
  "http://localhost:3000", // Optional
  "https://your-portfolio-domain.com" // Replace with your deployed frontend domain
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET, POST",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Nodemailer transporter setup using environment variables
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail app password
  },
});

// POST endpoint to send emails
app.post("/send-email", (req, res) => {
  const { fromEmail, message } = req.body;

  if (!fromEmail || !message) {
    return res.status(400).json({ success: false, error: "Email or message missing" });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER, // Gmail requires this to be your authenticated address
    to: "qb202100947@wmsu.edu.ph", // Your actual inbox
    subject: "Message from Portfolio Visitor",
    text: message,
    replyTo: fromEmail, // Reply will go to the user's email
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email error:", error);
      return res.status(500).json({ success: false, error: "Failed to send email" });
    }
    console.log("Email sent:", info.response);
    res.status(200).json({ success: true });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
