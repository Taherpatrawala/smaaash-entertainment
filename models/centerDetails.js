import sequelize from "../db.js";
import { DataTypes } from "sequelize";
import Centers from "./centers.js";

const CenterDetails = sequelize.define("CenterDetails", {
  pageName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  centerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  centerTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  centerAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  centerLogo: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  mapURL: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  mailTo: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  mailTo2: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  mailToCC: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  centerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Centers,
      key: "id",
    },
  },
});
export default CenterDetails;
