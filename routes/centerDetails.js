import centerDetailsControllers from "../controllers/centerDetailsControllers.js";
import { Router } from "express";

const centerDetailsRoutes = Router();

centerDetailsRoutes.get(
  "/getCenterDetails",
  centerDetailsControllers.getCenterDetails
);

export default centerDetailsRoutes;
