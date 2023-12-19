const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ username: req.body.name });

        if (user) {
            if (user.password === password) {
                res.json("Success");
            }
            else {
                res.json("Incorrect Password!");
            }
        }
        else {
            res.json("No user details found!");
        }

    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;