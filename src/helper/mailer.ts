import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';



export const sendEmail = async({email,emailType, userId}: any) => {
try {
    //create hashed token
   const hashedToken = bcryptjs.hash(userId.toString(), 10)



   if(emailType === "VERIFY"){

       await User.findByIdAndUpdate(
        userId,
        {
            verifyToken: hashedToken, 
            verifyTokenExpire: Date.now() + 3600000
        }
       )
   }else if (emailType === "RESET"){
       await User.findByIdAndUpdate(
           userId,
           {
               resetToken: hashedToken,
               resetTokenExpire: Date.now() + 3600000
           }
       )
    }

    const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d3ffd7e8a67d3c",
    pass: "0d34adaece2a43"
    //TODO add these credentials in .env
  }
});


const mailOptions = {
    from: "demo@gmail.com",
    to: email,
    subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
    html: `<a href="http://localhost:3000/auth/${emailType.toLowerCase()}/${hashedToken}">Click here to ${emailType.toLowerCase()}</a>`
}


const mailresponse = await transport.sendMail(mailOptions);
return mailresponse;
    
} catch (error) {
    console.log(error)

    throw new Error("Email not sent")
    
}
}