import emailjs from "emailjs-com";

export const sendWithEmailJS = async (fromEmail, message) => {
  const emailParams = {
    from_email: fromEmail,
    message: message,
  };

  try {
    const response = await emailjs.send(
      "service_5j4ll1r",     
      "template_3loiutz",    
      emailParams,           
      "a8OPq03QWm6pfav4R"    
    );

    console.log("Email sent successfully:", response);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email. Please try again later." };
  }
};
