import TournamentsForm from "../models/tournamentsForm.js";

const tournamentsControllers = {};

tournamentsControllers.submitTournamentsForm = async (req, res) => {
  const data = req.body;
  try {
    await TournamentsForm.create(data);
    res.status(200).json({
      message: "Tournament Registration Successful!",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "An error occurred while submitting the tournaments form.",
      error: error.message,
    });
  }
};

export default tournamentsControllers;
