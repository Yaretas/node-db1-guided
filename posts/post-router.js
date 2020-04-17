const express = require("express");

// database access using knex
const db = require("../data/db-config.js"); // Connection to the DataBase

const router = express.Router();

router.get("/", (req, res) => {
  // get the data from the database
  // select * from post;
  db.select("*")
    .from("posts") //Return a promise
    .then((rows) => {
      res
        .status(200)
        .json({
          data: rows
        })
        .catch((error) => {
          res.status(500).json({
            message: "Sorry, ran into an error"
          });
        });
    });
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;