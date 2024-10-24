const express = require("express");
require("dotenv").config();
const contactRouter = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const Port = process.env.Port || 3000;

// middle ware
// app.use(bodyParser.json());
app.use(express.json());
app.use("/api/contacts", contactRouter);
app.use(errorHandler);

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
