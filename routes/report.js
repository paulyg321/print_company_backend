const express = require("express");
const router = express.Router();
// VALIDATOR
const {validateReportData} = require("../validator/reportValidator");
// CONTROLLERS
const {submitReport, editReport} = require("../controllers/report");



router.post("/submit-report", validateReportData, submitReport);

router.put("/edit-report", editReport);

module.exports = router;