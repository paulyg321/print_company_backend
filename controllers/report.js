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
    // const {id, ...rest} = request.body;

    const report = jobReport.getJobReportInstance();

    report.editJobReport().then((data) => {
        response.json({
            itemId: data
        })
    })

}


