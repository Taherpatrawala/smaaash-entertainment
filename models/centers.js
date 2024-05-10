import sequelize from "../db.js";
import { DataTypes } from "sequelize";
import Events from "./events.js";

const Centers = sequelize.define("Centers", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  eventsId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Events,
      key: "id",
    },
  },
});

export default Centers;
