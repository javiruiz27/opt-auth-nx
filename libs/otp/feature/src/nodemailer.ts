import { createTransport } from "nodemailer";

export const sendOTPEmail = async (email, otp) => {
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: 'javiertestnode@gmail.com',
        pass: 'your password',
      },
    });
  
    const mailOptions = {
      from: 'javiertestnode@gmail.com',
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`,
    };
  
    await transporter.sendMail(mailOptions);
  };