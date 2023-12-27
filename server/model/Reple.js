const mongoose = require("mongoose");

const repleSchema = new mongoose.Schema(
    {
        repleNum: {
            type: Number,
            default: 0,
        },
        reple: String,
        name: String,
        password: String,
        // repleTime: {
        //     type: Date,
        //     default: Date.now
        // }
    },
    { collection: "reples", timestamps: true }
);

const Reple = mongoose.model("Reple", repleSchema);

module.exports = { Reple };