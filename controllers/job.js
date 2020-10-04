const jobInfo = require('../database/jobInfoService');

exports.getJobData = (request, response) => {

    const info = jobInfo.getjobInfoInstance();

    const jobNumber = request.query.jobNumber;

    info.getJobData(jobNumber).then((data) => {
        response.json({
            data: data[0]
        })
    })
    
}