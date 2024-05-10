import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Events = sequelize.define("Events", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Events;
