const express = require("express");
const router = express.Router();

const {getJobData, searchJobData} = require("../controllers/job");

router.get("/job-data", getJobData);

router.get("/search-job-data", searchJobData)

module.exports = router;