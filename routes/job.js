const express = require("express");
const router = express.Router();

const {getJobData} = require("../controllers/job");

router.get("/job-data", getJobData);

module.exports = router;