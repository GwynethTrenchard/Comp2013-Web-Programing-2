// Initialize mongoose
const mongoose = require("mongoose");
// Define the schema for the contact model
const Schema = mongoose.Schema;

//create conatcst schema

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  image: {
    type: String,
    required: true,
  },
});

// package and export the model
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
