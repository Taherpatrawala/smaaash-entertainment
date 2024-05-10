import ALL_MODELS from "./allModel.js";
import sequelize from "../db.js";
import CenterEvent from "../models/centerEvents.js";

export const ALL_MODELS_RELATIONSHIPS = async () => {
  // ALL_MODELS.EVENTS.belongsToMany(ALL_MODELS.CENTERS, {
  //   through: CenterEvent,
  // });
  // ALL_MODELS.CENTERS.belongsToMany(ALL_MODELS.EVENTS, {
  //   through: CenterEvent,
  //});
  ALL_MODELS.CENTERS.hasOne(ALL_MODELS.CENTERS_DETAILS, {
    foreignKey: "centersId",
  });
};
