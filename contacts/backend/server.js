// Initiate the server and connect to the database
const express = require("express");
const server = express();
const port = 3000;
//const { request, response } = require("express");
const mongoose = require("mongoose"); // import mongoose
require("dotenv").config(); // import dotenv
const { DB_URI } = process.env; // to grab the variable from the dotenv file
const cors = require("cors"); // for dissababling the dfault browsers security
const Contact = require("./models/contact"); // import model schema

//Middleware
server.use(express.json()); // ensure data is transmitted as json
server.use(express.urlencoded({ extended: true })); // toe ensure data is encoded and decoded while transmission
server.use(cors()); // Enable CORS for all requests to the server (Cross-Origin Resource Sharing) - This is needed to allow the frontend to make requests to the backend server

// Connect to the database and server listening
mongoose
  .connect(DB_URI)
  .then(() => {
    server.listen(port, () => {
      console.log(`Database connected\nServer is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to the database", error.message);
  });

// Routes
server.get("/", (request, response) => {
  response.send("Server is Live");
});

// to GET all the data from contacts collection
server.get("/contacts", async (request, response) => {
  try {
    const contacts = await Contact.find();
    response.send(contacts);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

server.post("/contact", async (request, response) => {
  const { name, email, address, phone, image } = request.body;
  const newContact = new Contact({
    name,
    contact: { email, phone, address },
    image,
  });
  try {
    await newContact.save();
    response.status(200).send({ message: "Contact is added successfully" });
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
});

// server.delete("/contacts/:id", async (request, response) => {
//   const { id } = request.params;
//   const objectId = new mongoose.Types.ObjectId(id); // Convert id to Mongoose ObjectId
//   try {
//     await Contact.findByIdAndDelete(objectId);
//     response.status(200).json({ message: "Contact deleted successfully" });
//   } catch (error) {
//     response.status(404).json({ message: error.message });
//   }
// });

// server.patch("/contacts/:id", async (request, response) => {
//   const { id } = request.params;
//   const { name, email, address, phone, image } = request.body;
//   const objectId = new mongoose.Types.ObjectId(id); // Convert id to Mongoose ObjectId
//   try {
//     await Contact.findByIdAndUpdate(id, {
//       name,
//       contact: { email, phone, address },
//       image,
//     }).then((response) => {
//       console.log(response);
//     });

//     await response
//       .status(200)
//       .json({ message: "Contact updated successfully" });
//   } catch (error) {
//     response.status(404).json({ message: error.message });
//   }
// });
