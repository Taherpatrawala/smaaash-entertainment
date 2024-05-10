import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const TournamentsForm = sequelize.define("tournamentsForm", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  noOfPeople: {
    type: DataTypes.ENUM("4"),
    allowNull: false,
  },
  isYourOfficeInMindSpace: {
    type: DataTypes.ENUM("Yes", "No"),
    allowNull: false,
  },

  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default TournamentsForm;
