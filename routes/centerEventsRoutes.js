import centerEventsController from "../controllers/centerEventsController.js";
import { Router } from "express";

const centerEventsRoutes = Router();

centerEventsRoutes.get("/getAllCenters", centerEventsController.getAllCenters);

export default centerEventsRoutes;
