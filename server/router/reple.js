const express = require("express");
const router = express.Router();

const { Reple } = require("../model/Reple.js");

router.post("/submit", async (req, res) => {
    let temp = {
        repleNum: req.body.repleNum,
        reple: req.body.reple,
        name: req.body.name,
        password: req.body.password,
    };

    try {
        const NewReple = new Reple(temp);
        await NewReple.save();

        return res.status(200).json({ success: true });
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({ success: false });
    }
});

router.post("/getreple", (req, res) => {
    Reple.find()
        .exec()
        .then((repleInfo) => {
            return res.status(200).json({ success: true, commentList: repleInfo });
        })
        .catch((err) => {
            console.log(err);
            return res.status(400).json({ success: false });
        })
});

module.exports = router;