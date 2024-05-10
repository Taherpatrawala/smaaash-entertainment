import Events from "../models/events.js";
import Centers from "../models/centers.js";

export const getEvents = async (req, res) => {
  try {
    const events = await Events.findAll({
      include: [
        {
          model: Centers,
          attributes: ["name"],
        },
      ],
    });
    res.status(200).json(events);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      message: "Events not found",
      error: error.message,
    });
  }
};
