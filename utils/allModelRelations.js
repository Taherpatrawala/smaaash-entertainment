import ALL_MODELS from "./allModel.js";
import sequelize from "../db.js";

export const ALL_MODELS_RELATIONSHIPS = async () => {
  ALL_MODELS.EVENTS.hasMany(ALL_MODELS.CENTERS, {
    foreignKey: "eventsId",
  });
  ALL_MODELS.CENTERS.hasOne(ALL_MODELS.CENTERS_DETAILS, {
    foreignKey: "centerId",
  });
};
