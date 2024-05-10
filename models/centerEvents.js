import sequelize from "../db.js";
import { DataTypes } from "sequelize";
import Centers from "./centers.js";
import Events from "./events.js";

const CenterEvent = sequelize.define("CenterEvent", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  centerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Centers,
      key: "id",
    },
  },
  eventId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Events,
      key: "id",
    },
  },
});

export default CenterEvent;
