import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();


config({ path: "./config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL], 
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  try {
  
    await sendEmail({
      email: "devyameen786@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});


router.post("/join/now", async (req, res) => {
  const { name, email, phone, subscription } = req.body;


  if (!name || !email || !phone || !subscription) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
    });
  }

  try {

    await sendEmail({
      email: "devyameen786@gmail.com",
      subject: "New Join Now Submission",
      message: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubscription: ${subscription}`,
      userEmail: email, 
    });

    res.status(200).json({
      success: true,
      message: "Join Now form submitted and email sent successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error: Unable to send email",
    });
  }
});


app.use(router);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
