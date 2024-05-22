const express = require("express");
const router = express.Router();



//Add a user
router.post("/register", async (req,res) => {
    try {
        const {username, password} = req.body;

        //Validera input

        if(!username || !password) {
           return res.status(400).json({error: "Write in username/password"})
        }

        //Correct - save user
        res.status(201).json({ message: "User created"});

    }

    catch(error) {
        res.status(500).json({error: "Server error"});
    }
});

//Login user
router.post("/login", async (req,res) =>{
    try {

        const {username, password} = req.body;
        //Correct user logged in
        if(username === "Rojvan" & password=== "password") {
            res.status(201).json({message: "User logged in.."})
        }

        else {
            res.status(401).json({error: "wrong username/password"})
        }
        


    }

    catch(error) {
        res.status(500).json({error: "Server error"})
    }
});

module.exports = router;