import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Centers = sequelize.define("Centers", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Centers;
