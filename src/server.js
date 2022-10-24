'use strict';

const express = require('express');
const path = require("path");

const generate = require("./generate");
const analyze = require("./analyze");

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8080;

const router = express.Router();
const app = express();
app.use("/", router);

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Gen poker hand endpoint
router.get("/gen", (req, res) => {
    const hand = generate.genHand(5);
    const handString = "";
    for (let i = 0; i < hand.length; i++) {
        handString += generate.cardToString(hand[i]);
    }
    const handAnalyze = analyze.genAnalyze(handString);
    const obj = {};
    obj.hand = handString;
    obj.analysis = handAnalyze;
    res.send(obj);
});

router.post("/analyze", (req, res) => {
    hand = req.body.hand;
    if (hand.length != 10) {
        res.sendStatus(400);
    } else {
        const obj = {};
        obj.hand = hand;
        obj.analysis = analyze.genAnalyze(hand);
        res.send(obj);
    }
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});