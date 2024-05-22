//Skriven av Özgur

const express = require("express");
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");
require("dotenv").config();

const port = process.env.PORT || 3400
const app = express();
app.use(bodyParser.json());

//Routes
app.use("/api", authRoutes)


//Start application
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});