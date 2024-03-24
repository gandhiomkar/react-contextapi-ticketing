// routes.js

const express = require("express");
const router = express.Router();
// const verifyToken = require("../middleware/Auth");
const { loginUser } = require("../Controllers/LoginController.js");
const { gettechsupport } = require("../Controllers/UserController.js");
const {
  gettickets,
  getTicketsForTs,
  updateTechSupport,
} = require("../Controllers/TicketController.js");

// router.post("/verifytoken", verifyUser);

// router.get("/users", getUsers).post(createUser);

router.post("/login", loginUser);

router.get("/techsupport", gettechsupport);

router.get("/gettickets", gettickets).post("/gettickets", getTicketsForTs);

router.put("/updatetechsupport/:ticketId", updateTechSupport);

module.exports = router;
