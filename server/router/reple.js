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

router.post("/edit", async (req, res) => {
    // console.log(req.body); 전달 확인
    Reple.findByIdAndUpdate(req.body.repleId, {
        reple: req.body.reple,
        name: req.body.name,
        password: req.body.password,
    })
        .then(() => {
            // console.log(updatedReple); 서버가 db에 보낸 내용 확인
            return res.status(200).json({ success: true });
        })
        .catch((err) => {
            console.error(err);
            return res.status(400).json({ success: false });
        });
})

router.post("/delete", async (req, res) => {
    Reple.deleteOne({ _id: req.body.repleId })
        .exec()
        .then(() => {
            return res.status(200).json({ success: true });
        })
        .catch((err) => {
            console.error(err);
            return res.status(400).json({ success: false });
        });
})

module.exports = router;