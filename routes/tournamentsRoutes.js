import { Router } from "express";
import tournamentsControllers from "../controllers/tournamentsControllers.js";

const tournamentsRoutes = Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     TournamentsForm:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the participant.
 *         companyName:
 *           type: string
 *           description: The name of the participant's company.
 *         noOfPeople:
 *           type: string
 *           enum: ["4"]
 *           description: The number of people participating.
 *         isYourOfficeInMindSpace:
 *           type: string
 *           enum: [Yes, No]
 *           description: Indicates if the participant's office is in MindSpace.
 *         phoneNumber:
 *           type: string
 *           description: The phone number of the participant.
 */

/**
 * @openapi
 * /tournaments/submitTournamentsForm:
 *   post:
 *     summary: Submit Tournaments Form
 *     tags: [Tournaments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TournamentsForm'
 *     responses:
 *       '200':
 *         description: Tournament registration successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message.
 *       '500':
 *         description: An error occurred while submitting the tournaments form.
 */

tournamentsRoutes.post(
  "/submitTournamentsForm",
  tournamentsControllers.submitTournamentsForm
);

export default tournamentsRoutes;
