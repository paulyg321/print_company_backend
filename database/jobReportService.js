const connection = require("./connection");

let instance = null;

// Can create multiple classes like this
class JobReport {

    // Creates one instance of this class
    static getJobReportInstance(){
        return instance ? instance : new JobReport();
    }

    async insertJobReport(reportData) {
        const {
            inspection_type,
            previous_order_purged,
            previous_order_number,
            proof_available,
            overlay_verified_to_label,
            customer_name,
            item_description,
            item_number,
            msf_number,
            quantity_ordered,
            unwind_direction,
            quantity_per_roll,
            sample_quantity,
            csp_manual_checked,
            csp_number,
            csp_review,
            leader,
            trailer,
            core_inside_diameter,
            maximum_roll_diameter,
            label_repeat_length,
            sensor_type,
            matrix_missing_label_director,
            splice_detector,
            barcode_detector,
            inkjet_printer,
            avt_camero_on,
            challenge_complete,
            core_labels_verified
        } = reportData

        try {
            const response = await new Promise((resolve, reject) => {
                const query = " \
                    INSERT INTO job_report (\
                    inspection_type, previous_order_purged, previous_order_number, proof_available, \
                    overlay_verified_to_label, customer_name, item_description, item_number, msf_number, \
                    quantity_ordered, unwind_direction, quantity_per_roll, sample_quantity, csp_manual_checked, \
                    csp_number, csp_review, leader, trailer, core_inside_diameter, maximum_roll_diameter, label_repeat_length, \
                    sensor_type, matrix_missing_label_director, splice_detector, barcode_detector, inkjet_printer, \
                    avt_camero_on, challenge_complete, core_labels_verified) \
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

                const values = [
                    inspection_type,
                    previous_order_purged,
                    previous_order_number,
                    proof_available,
                    overlay_verified_to_label,
                    customer_name,
                    item_description,
                    item_number,
                    msf_number,
                    quantity_ordered,
                    unwind_direction,
                    quantity_per_roll,
                    sample_quantity,
                    csp_manual_checked,
                    csp_number,
                    csp_review,
                    leader,
                    trailer,
                    core_inside_diameter,
                    maximum_roll_diameter,
                    label_repeat_length,
                    sensor_type,
                    matrix_missing_label_director,
                    splice_detector,
                    barcode_detector,
                    inkjet_printer,
                    avt_camero_on,
                    challenge_complete,
                    core_labels_verified
                ];

                connection.query(query, values, (err, results) => {
                    if(err){
                        reject(new Error(err.message));
                    }

                    console.log(results);

                    resolve(results);
                });
            })

            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async editJobReport(reportData, id) {
        const columns = {
            previous_order_number: 303
        }

        const where = {
            id
        }

        const query = "UPDATE job_report SET ? WHERE ?";

        try {
            const response = new Promise((resolve, reject) => {
                connection.query(query, [reportData, where], (err, results) => {
                    if(err){
                        reject(new Error(err.message));
                    }
        
                    console.log(results);
        
                    resolve(results.insertId);
                });
            })

            return response;
        } catch (error) {
            console.log(error);
        }
    }


}

module.exports = JobReport;