const { getJobReportInstance } = require('../database/jobReportService');
const jobReport = require('../database/jobReportService');

exports.submitReport = (request, response) => {
    const submittedReport = request.body;

    const report = jobReport.getJobReportInstance();

    report.insertJobReport(submittedReport).then((data) => {
        response.json({
            itemId: data
        });
    })

}

exports.editReport = (request, response) => {
    const {id, ...rest} = request.body;

    const report = jobReport.getJobReportInstance();

    report.editJobReport(rest, id).then((data) => {
        response.json({
            itemId: data
        })
    })

}

exports.getAllReports = (request, response) => {
    const reports = jobReport.getJobReportInstance();

    reports.getAllReports().then((data) => {
        response.json({
            reports: data
        })
    })
}


exports.getSpecificReport = (request, response) => {
    const id = request.params.reportId;

    const report = jobReport.getJobReportInstance();

    report.getSpecificReport(id).then((data) => {
        response.json({
            report: data
        })
    })
}

exports.deleteSpecificReport = (request, response) => {
    const id = request.params.reportId;

    const report = jobReport.getJobReportInstance();

    report.deleteSpecificReport(id).then((data) => {
        response.json({
            reportId: data
        })
    })
}