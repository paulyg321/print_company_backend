const express = require("express");
const router = express.Router();
// VALIDATOR
const {validateReportData} = require("../validator/reportValidator");
// CONTROLLERS
const {submitReport, editReport, getAllReports, getSpecificReport,deleteSpecificReport} = require("../controllers/report");



router.post("/submit-report", validateReportData, submitReport);

router.put("/edit-report", editReport);

router.get("/get-all-reports", getAllReports);

router.get("/select-report/:reportId", getSpecificReport);

router.get("/delete-report/:reportId", deleteSpecificReport);

module.exports = router;