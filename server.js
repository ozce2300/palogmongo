//Skriven av Özgur

const express = require("express");
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");
require("dotenv").config();
const jwt = require("jsonwebtoken")
const cors = require("cors");

const port = process.env.PORT || 3400
const app = express();
app.use(cors());

app.use(bodyParser.json());

//Routes
app.use("/api", authRoutes)

//Protected routes
app.get("/api/protected", authenticateToken, (req,res) =>{
    res.json({message:"skyddat route"})
});

//Validate token
function authenticateToken(req,res,next) {
    const authHeader = req.headers[`authorization`];
    const token = authHeader && authHeader.split(" ")[1]
    if(token==null) res.status(401).json({message: "Not authorized for this route"});

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, username) => {
        if(err) return res.status(403).sjon({error: "Not correct jwt"});

        req.username = username;
        next();
    })
}


//Start application
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});