const {ERROR_MESSAGES} = require("./errorMessages");

const GENERIC_MAX_TEXT_LENGTH = 256;

const genericTextLength = (maxLength) => {

    return {
        min: 1,
        max: maxLength,
    }
}

const isYesOrNo = (value) => {
    if(value !== 'YES' && value !== 'NO'){
        return false;
    }

    return true;
}

const isOfforOn = (value) => {
    if(value !== "OFF" && value !== "ON"){
        return false;
    }

    return true;
}

exports.validateReportData = (request, response, next) => {
    
    request.check("inspection_type")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.inspectionTypeRequired)
        .isLength(genericTextLength(GENERIC_MAX_TEXT_LENGTH))
        .withMessage(ERROR_MESSAGES.need1to256characters);

    request.check("previous_order_purged")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.previousOrderPurgedRequired)
        .custom((value) => isYesOrNo(value))
        .withMessage(`previous_order_purged ${ERROR_MESSAGES.mustBeYorN}`);

    request.check("previous_order_number")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.previousOrderNumberRequired)
        .isInt()
        .withMessage(ERROR_MESSAGES.integerRequired);

    request.check("proof_available")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.proofAvailableRequired)
        .custom((value) => isYesOrNo(value))
        .withMessage(`proof_available ${ERROR_MESSAGES.mustBeYorN}`);

    request.check("overlay_verified_to_label")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.overlayVerifiedToLabelRequired)
        .custom((value) => isYesOrNo(value))
        .withMessage(`overlay_verified_to_label ${ERROR_MESSAGES.mustBeYorN}`);

    request.check("customer_name")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.customerNameRequired)
        .isLength(genericTextLength(GENERIC_MAX_TEXT_LENGTH))
        .withMessage(ERROR_MESSAGES.need1to256characters);

    request.check("item_description")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.itemDescriptionRequired)
        .isLength(genericTextLength(GENERIC_MAX_TEXT_LENGTH))
        .withMessage(ERROR_MESSAGES.need1to256characters);

    request.check("item_number")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.itemNumberRequired)
        .isInt()
        .withMessage(ERROR_MESSAGES.integerRequired);
        
    request.check("msf_number")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.msfNumberRequired)
        .isLength(genericTextLength(GENERIC_MAX_TEXT_LENGTH))
        .withMessage(ERROR_MESSAGES.need1to256characters);

    request.check("quantity_ordered")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.quantityOrderedRequired)
        .isInt()
        .withMessage(ERROR_MESSAGES.integerRequired);

    request.check("unwind_direction")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.unwindDirectionRequired)
        .isInt()
        .withMessage(ERROR_MESSAGES.integerRequired);

    request.check("quantity_per_roll")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.quantityPerRollRequired)
        .isInt()
        .withMessage(ERROR_MESSAGES.integerRequired);

    request.check("sample_quantity")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.sampleQuantityRequired)
        .isInt()
        .withMessage(ERROR_MESSAGES.integerRequired);

    request.check("csp_manual_checked")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.cspManualCheckedRequired)
        .isInt()
        .withMessage(ERROR_MESSAGES.integerRequired);

    request.check("csp_number")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.cspNumberRequired)
        .isInt()
        .withMessage(ERROR_MESSAGES.integerRequired);

    request.check("csp_review")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.cspReviewRequired)
        .isInt()
        .withMessage(ERROR_MESSAGES.integerRequired);

    request.check("leader")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.leaderRequired)
        .isFloat()
        .withMessage(ERROR_MESSAGES.floatRequired);
    
    request.check("trailer")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.trailerRequired)
        .isFloat()
        .withMessage(ERROR_MESSAGES.floatRequired);

    request.check("core_inside_diameter")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.coreInsideDiameterRequired)
        .isFloat()
        .withMessage(ERROR_MESSAGES.floatRequired);

    request.check("maximum_roll_diameter")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.maximumRollDiameterRequired)
        .isFloat()
        .withMessage(ERROR_MESSAGES.floatRequired)

    request.check("label_repeat_length")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.labelRepeatLengthRequired)
        .isFloat()
        .withMessage(ERROR_MESSAGES.floatRequired);

    request.check("sensor_type")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.sensorTypeRequired)
        .isLength(genericTextLength(GENERIC_MAX_TEXT_LENGTH))
        .withMessage(ERROR_MESSAGES.need1to256characters);

    request.check("matrix_missing_label_director")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.matrixMissingLabelDirectorRequired)
        .custom((value) => isOfforOn(value))
        .withMessage(ERROR_MESSAGES.isOfforOn)

    request.check("splice_detector")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.spliceDetectorRequired)
        .custom((value) => isOfforOn(value))
        .withMessage(ERROR_MESSAGES.mustBeOfforOn)

    request.check("barcode_detector")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.barcodeDetectorRequired)
        .custom((value) => isOfforOn(value))
        .withMessage(ERROR_MESSAGES.mustBeOfforOn)

    request.check("inkjet_printer")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.inkjetPrinterRequired)
        .custom((value) => isOfforOn(value))
        .withMessage(ERROR_MESSAGES.mustBeOfforOn)

    request.check("avt_camero_on")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.avtCameroOnRequired)
        .custom((value) => isYesOrNo(value))
        .withMessage(`avt_camero_on ${ERROR_MESSAGES.mustBeYorN}`);
    
    request.check("challenge_complete")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.challengeCompleteRequired)
        .custom((value) => isYesOrNo(value))
        .withMessage(`challenge_complete ${ERROR_MESSAGES.mustBeYorN}`);

    request.check("core_labels_verified")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.coreLabelsVerifiedRequired)
        .custom((value) => isYesOrNo(value))
        .withMessage(`core_labels_verified ${ERROR_MESSAGES.mustBeYorN}`)


    
    // TODO: ADD CHECKS FOR THE REST OF THE DATA (AFTER TRAILER)

    const errors = request.validationErrors();

    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return response.status(400).json({ error: firstError });
    }

    next();
}