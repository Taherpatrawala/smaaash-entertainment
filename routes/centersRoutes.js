import centersControllers from "../controllers/centersControllers.js";
import { Router } from "express";

const centersRoutes = Router();

centersRoutes.get("/getCenters", centersControllers.getCenters);

centersRoutes.post("/getCentersByEvent", centersControllers.getCentersByEvent);

export default centersRoutes;
