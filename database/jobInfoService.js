const connection = require("./connection");

let instance = null;

// Can create multiple classes like this
class JobInfo {

    // Creates one instance of this class
    static getjobInfoInstance(){
        return instance ? instance : new JobInfo();
    }

    async getJobData(requestedJobNumber) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM job_info WHERE job_number = ?";

                connection.query(query, [requestedJobNumber], (err, results) => {
                    if(err){
                        reject(new Error(err.message));
                    }

                    resolve(results);
                });
            })

            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async searchJobData(requestedJobNumber) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM job_info WHERE job_number LIKE ?";

                connection.query(query, [`%${requestedJobNumber}%`], (err, results) => {
                    if(err){
                        reject(new Error(err.message));
                    }

                    resolve(results);
                });
            })

            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllJobData(){
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM job_info";

                connection.query(query, (err, results) => {
                    if(err){
                        reject(new Error(err.message));
                    }

                    resolve(results);
                });
            })

            return response;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = JobInfo;