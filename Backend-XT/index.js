require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const authRoutes = require("./Routes/userRoute.js");
const Navbar = require("./Routes/NavMenu.js");
const HomepageRoute=require("./Routes/HomepageRoute.js")

const app = express();
const PORT = process.env.PORT || 5000;



// Middleware
app.use(cors({ origin: "*", credentials: true }));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB Error:", err));

// Define Schema & Model
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", ContactSchema);

// Email Transporter (Nodemailer)
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || "smtp.gmail.com", // Default to Gmail
  port: 465, // Use 465 for SSL, 587 for TLS
  secure: true, // True for 465, false for 587
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

app.use("/auth", authRoutes);
app.use("/navbar", Navbar);
app.use("/homepage",HomepageRoute)

// API Endpoint to Handle Form Submission
app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    console.log("Received request:", req.body); // Debugging

    // Validate input
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to Database
    const newEntry = new Contact({ name, email, phone, message });
    await newEntry.save();
    console.log("Saved to MongoDB");

    // Send Email
    const mailOptions = {
      from: `"Contact us Form" <${process.env.MAIL_USER}>`, // Sender email
      to: email, // User email
      subject: "Contact Form Submission",
      html: `<p>Hello Neeraj,</p><p>Here's new Client <br></br> Name:${name}  <br></br>   message:</p><blockquote>${message}</blockquote><br><br> Email:<p>${email}</p><br></br><p>Number:${phone}</p>We'll get back to you soon.</p><p>Best Regards,<br>Your Team</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    res.status(201).json({ message: "Form submitted successfully!", info });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
