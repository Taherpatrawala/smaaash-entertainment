import ContactForm from "../models/contactFrom.js";
import TournamentsForm from "../models/tournamentsForm.js";
import Centers from "../models/centers.js";
import Events from "../models/events.js";
import CenterDetails from "../models/centerDetails.js";

const ALL_MODELS = {
  TOURNAMENTS_FORM: TournamentsForm,
  CONTACT_FORM: ContactForm,
  CENTERS: Centers,
  EVENTS: Events,
  CENTERS_DETAILS: CenterDetails,
};

export default ALL_MODELS;
