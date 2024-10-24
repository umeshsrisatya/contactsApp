const express = require("express");
const router = express.Router();

// all the logics about the contacts requests are in the contactController 
const {
    getContacts,
    createContact,
    GetContact,
    updateContact,
    deleteContact,
} = require("../controllers/contactController");

// router.route(Path).method(controller).method(controller)...
// this route method helps to chain http methods to the same route
router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(GetContact).put(updateContact).delete(deleteContact);

module.exports = router;
