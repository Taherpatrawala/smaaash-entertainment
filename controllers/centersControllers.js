import Centers from "../models/centers.js";
import Events from "../models/events.js";

const centersControllers = {};

centersControllers.getCenters = async (req, res) => {
  // const centers = await Centers.findAll({ include: [Events] });
  try {
    const centers = await Centers.findAll();
    res.status(200).json(centers);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching centers.",
      error: error.message,
    });
  }
};

centersControllers.getCentersByEvent = async (req, res) => {
  const { eventName } = req.body;
  try {
    const event = await Events.findOne({
      where: { name: eventName },
    });
    const centers = await Centers.findAll({
      where: { eventsId: event.id },
      attributes: ["name"],
    });
    res.status(200).json(centers);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching centers.",
      error: error.message,
    });
  }
};

export default centersControllers;
