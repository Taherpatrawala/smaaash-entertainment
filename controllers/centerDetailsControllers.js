import CenterDetails from "../models/centerDetails.js";

const centerDetailsControllers = {};

centerDetailsControllers.getCenterDetails = async (req, res) => {
  try {
    const centerDetails = await CenterDetails.findAll();
    res.send(centerDetails);
  } catch (error) {
    res
      .status(500)
      .send({
        message: "An error occurred while fetching center details.",
        error: error.message,
      });
  }
};

export default centerDetailsControllers;
