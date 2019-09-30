const express = require("express");
const Guitars = require("./guitarsModel.js");
const router = require("express").Router();


router.post("/", (req, res) => {
    let newGuitar = req.body;
    Guitars.insert(newGuitar)
        .then(guitar => {
            res.status(200).json(guitar)
        })
        .catch( () => {
            res.status(500).json({error: "There was a server problem"})
        })

})



module.exports = router; 



