const jobInfo = require('../database/jobInfoService');

exports.getJobData = (request, response) => {

    const info = jobInfo.getjobInfoInstance();

    const jobNumber = request.query.jobId;

    info.getJobData(jobNumber).then((data) => {
        response.json({
            data: data[0]
        })
    })
    
}