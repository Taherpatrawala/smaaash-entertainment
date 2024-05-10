import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Events = sequelize.define("Events", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

export default Events;
