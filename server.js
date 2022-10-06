// ========================
// Packages
// ========================
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();

// ========================
// Link to Database
// ========================
const uri = process.env.MONGO_URI; // Heroku key stored here.
const client = new MongoClient(uri);

MongoClient.connect(uri) // Promises approach.
    .then(client => {
        console.log("Connected to your database with promises");
        const db = client.db("nyc-public-pools");
        const coll = db.collection("messages");

        // ========================
        // Middlewares
        // ========================
        app.use(express.static(__dirname + "/dist/")); // For Heroku deployment.
        app.use(express.json()); // Without POST sends empty body to MongoDB.

        // ========================
        // Routes
        // ========================
        app.get("/log", (req, res) => {
            db.collection("messages").find().toArray()
                .then(results => {
                    res.send({ messages: results });
                })
                .catch(error => console.error(error));
        });

        app.get(/.*/, function(req, res) {
            res.sendFile(__dirname + "/dist/index.html");
        });

        app.post("/messages", (req, res) => {
            coll.insertOne(req.body)
            .then(result => {
                res.redirect("/"); // without this browser gets stuck because
            }) //  it's expecting something back from the server.
            .catch(error => console.error(error));
        });

        // ========================
        // Listen
        // ========================
        app.listen(process.env.PORT || 4040, () => {
            console.log(`Server listening on port ${process.env.PORT}`);
        });
    })
    .catch(error => console.log(error));
