import CenterEvent from "../models/centerEvents.js";

const centerEventsController = {};

centerEventsController.getAllCenters = async (req, res) => {
  try {
    const centerEvents = await CenterEvent.findAll();
    res.send(centerEvents);
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while fetching center events.",
      error: error.message,
    });
  }
};

export default centerEventsController;
