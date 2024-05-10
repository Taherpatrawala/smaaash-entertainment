import { getEvents } from "../controllers/eventsControllers.js";
import { Router } from "express";

const eventsRoutes = Router();

eventsRoutes.get("/getEvents", getEvents);

export default eventsRoutes;
