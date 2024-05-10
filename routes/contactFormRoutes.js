import contactFormControllers from "../controllers/contactFromControllers.js";
import { Router } from "express";

const contactFormRoutes = Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     ContactForm:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the contact.
 *         phone:
 *           type: string
 *           description: The phone number of the contact.
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the contact.
 *         message:
 *           type: string
 *           description: The message from the contact.
 */

/**
 * @openapi
 * /contactForm/submitContactForm:
 *   post:
 *     summary: Submit Contact Form
 *     tags: [ContactForm]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContactForm'
 *     responses:
 *       '200':
 *         description: Contact form submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message.
 *       '500':
 *         description: An error occurred while submitting the contact form.
 */

contactFormRoutes.post(
  "/submitContactForm",
  contactFormControllers.submitContactForm
);

export default contactFormRoutes;
