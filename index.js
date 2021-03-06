const express = require("express")

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

app.get("/spinach", (req, res) => {
    res.json({
        name: "spinach",
        bestFood: true
    });
});

app.listen(PORT, function(){
    console.log("listening on port" + PORT);
});