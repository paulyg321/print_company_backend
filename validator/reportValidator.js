const {ERROR_MESSAGES} = require("./errorMessages");

const GENERIC_MAX_TEXT_LENGTH = 256;

const genericTextLength = (maxLength) => {

    return {
        min: 1,
        max: maxLength,
    }
}

const isYorN = (value) => {
    if(value !== 'Y' || value !== 'N'){
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
        .custom((value) => isYorN(value))
        .withMessage(ERROR_MESSAGES.mustBeYorN);

    request.check("previous_order_number")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.previousOrderNumberRequired)
        .isInt()
        .withMessage(ERROR_MESSAGES.integerRequired);

    request.check("proof_available")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.proofAvailableRequired)
        .custom((value) => isYorN(value))
        .withMessage(ERROR_MESSAGES.mustBeYorN);

    request.check("overlay_verified_to_label")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.overlayVerifiedToLabelRequired)
        .custom((value) => isYorN(value))
        .withMessage(ERROR_MESSAGES.mustBeYorN);

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
        .withMessage(ERROR_MESSAGES.integerRequired)

    request.check("sample_quantity")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.sampleQuantityRequired)
        .isInt()
        .withMessage(ERROR_MESSAGES.integerRequired)

    request.check("csp_manual_checked")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.cspManualCheckedRequired)
        .isInt()
        .withMessage(ERROR_MESSAGES.integerRequired)

    request.check("csp_number")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.cspNumberRequired)
        .isInt()
        .withMessage(ERROR_MESSAGES.integerRequired)

    request.check("csp_review")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.cspReviewRequired)
        .isInt()
        .withMessage(ERROR_MESSAGES.integerRequired)

    request.check("leader")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.leaderRequired)
        .isFloat()
        .withMessage(ERROR_MESSAGES.floatRequired)
    
    request.check("trailer")
        .notEmpty()
        .withMessage(ERROR_MESSAGES.trailerRequired)
        .isFloat()
        .withMessage(ERROR_MESSAGES.floatRequired)

    
    // TODO: ADD CHECKS FOR THE REST OF THE DATA (AFTER TRAILER)

    const errors = request.validationErrors();

    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return response.status(400).json({ error: firstError });
    }

    next();
}