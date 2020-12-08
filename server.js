const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.set("view engine", "ejs");
const port = 3000;

app.get("/", (req, res) => {
	res.send("welcome.!");
});
app.use("/api", require("./routes/cars"));
app.listen(port, () =>
	console.log(`Example app listening on port port! ${port}`)
);
