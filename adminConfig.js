import AdminJS from "adminjs";
import * as AdminJSSequelize from "@adminjs/sequelize";
import { dark, light } from "@adminjs/themes";
import { buildRouter, buildAuthenticatedRouter } from "@adminjs/express";
import db from "./db.js";

AdminJS.registerAdapter(AdminJSSequelize);

const adminJs = new AdminJS({
  databases: [db],
  resources: [],
  rootPath: "/admin",
  defaultTheme: light.id,
  availableThemes: [dark, light],
  branding: {
    companyName: "Smaaash Entertainment",
    softwareBrothers: false,
    // logo: '/princeLogo.png', // Update the logo path if needed
  },
});

const router = buildRouter(adminJs);
// app.use(adminJs.options.rootPath, router)

adminJs.watch();

const adminJSConfig = (app) => {
  // app.use(adminJs.options.rootPath, adminRouter);
  app.use(adminJs.options.rootPath, router);
};

export default adminJSConfig;
