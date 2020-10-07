const express = require("express");
const router = express.Router();

const {getJobData, searchJobData, getAllJobData} = require("../controllers/job");

router.get("/job-data", getJobData);

router.get("/search-job-data", searchJobData)

router.get("/get-all-job-data", getAllJobData);

module.exports = router;