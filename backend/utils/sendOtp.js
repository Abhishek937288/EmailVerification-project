import resend from "../utils/resend.js"; 

export const sendOtpEmail = async (toEmail, otp)=>{
try{    const response = await resend.emails.send({
        from:"onboarding@resend.dev",
        to: toEmail, 
        subject:"your otp code",
        html :`<p>Your OTP is <strong>${otp}</strong>. It will expire in 1 hour.</p>`
    });
return response ;}catch(err){
    console.log(err.message);
}
}