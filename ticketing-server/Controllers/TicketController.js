const Tickets = require("../Model/Ticket");
const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

//get tickets
const gettickets = expressAsyncHandler(async (req, res) => {
  const tickets = Tickets;
  console.log(tickets);
  res.status(200).json(tickets);
});

//get tickets with specific techsupport
const getTicketsForTs = expressAsyncHandler(async (req, res) => {
  const { support } = req.body;
  const tickets = Tickets.filter(
    (ticket) => ticket.assignedSupport === support
  );
  res.status(200).json(tickets);
});

const updateTechSupport = (req, res) => {
  const { ticketId } = req.params;
  const { techSupportId } = req.body;
  console.log(techSupportId);

  // Find the ticket in the tickets array
  const ticketIndex = Tickets.findIndex(
    (ticket) => ticket.id === parseInt(ticketId)
  );

  if (ticketIndex !== -1) {
    // Update the tech support ID for the ticket
    Tickets[ticketIndex].assignedSupport = techSupportId;

    // Send updated ticket back as response
    res.status(200).json(Tickets[ticketIndex]);
  } else {
    // Ticket not found
    res.status(404).json({ error: "Ticket not found" });
  }
};

module.exports = { gettickets, getTicketsForTs, updateTechSupport };
