// ========================
// Packages
// ========================
const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();

// ========================
// Link to Database
// ========================
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

MongoClient.connect(uri) // Promises approach.
    .then(client => {
        console.log("Connected to your database with promises");
        const db = client.db("nyc-public-pools");
        const coll = db.collection("messages");

        // ========================
        // Middlewares
        // ========================
        //app.set("view engine", "ejs");
        app.use(bodyParser.json()); // Without this POST sends empty body to db.
        app.use(bodyParser.urlencoded({ extended: true }));

        // ========================
        // Routes
        // ========================
        app.get("/", (req, res) => {
            db.collection("messages").find().toArray()
                .then(results => {
                    //res.render("index.ejs", { messages: results });
                    res.send({ messages: results });
                })
                .catch(error => console.error(error));
        });

        app.post("/messages", (req, res) => {
            coll.insertOne(req.body)
            .then(result => {
                res.redirect("/"); //without this browser gets stuck because
            }) //  it's expecting something back from the server.
            .catch(error => console.error(error));
        });

        // ========================
        // Listen
        // ========================
        let port = process.env.PORT;
            if (port == null || port == "") {
                port = 8000;
            }
        app.listen(port);
    })
    .catch(error => console.log(error));
