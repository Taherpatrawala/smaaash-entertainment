import ContactForm from "../models/contactFrom.js";

const contactFormControllers = {};

contactFormControllers.submitContactForm = async (req, res) => {
  const data = req.body;
  try {
    await ContactForm.create(data);
    res.status(200).json({
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error in submitting contact form!",
      error: error.message,
    });
  }
};

export default contactFormControllers;
