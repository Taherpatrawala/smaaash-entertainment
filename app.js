import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./db.js";

import tournamentsRoutes from "./routes/tournamentsRoutes.js";
import contactFormRoutes from "./routes/contactFormRoutes.js";
import centersRoutes from "./routes/centersRoutes.js";
import eventsRoutes from "./routes/eventsRoutes.js";
import centerDetailsRoutes from "./routes/centerDetails.js";

import { serve, setup } from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import adminJSConfig from "./adminConfig.js";

import { ALL_MODELS_RELATIONSHIPS } from "./utils/allModelRelations.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Smaaash Entertainment API",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
        description: "Development server",
      },
      {
        url: `http://smtg:${process.env.PORT || 3000}`,
        description: "Test server",
      },
      {
        url: "https://smtg",
        description: "Live server",
      },
    ],
  },
  apis: ["./routes/**/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", serve, setup(swaggerSpec));

app.use("/tournaments", tournamentsRoutes);
app.use("/contactForm", contactFormRoutes);
app.use("/centers", centersRoutes);
app.use("/events", eventsRoutes);
app.use("/centerDetails", centerDetailsRoutes);

ALL_MODELS_RELATIONSHIPS();
adminJSConfig(app);
sequelize.sync().then(() => {
  console.log("Database connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
