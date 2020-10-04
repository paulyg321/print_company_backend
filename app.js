const express = require("express");
const app = express();
const cors = require("cors");
const expressValidator = require("express-validator");
const dotenv = require("dotenv");
dotenv.config();

const jobRoute = require("./routes/job");
const jobReport = require("./routes/report");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(expressValidator());

app.use("/api", jobRoute);
app.use("/api", jobReport);

app.listen(process.env.PORT, (err) => {
    console.log("Running on port 5002");
})