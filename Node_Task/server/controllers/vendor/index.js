import mongoose from "mongoose";
import { userTypes } from "../../constants/index.js";
import { UserModel } from "../../models/user.js";
import { CustomError } from "../../utils/CustomError.js";

export const getCustomers = async (req, res, next) => {
    const { _id: vendorId } = req.user;
    const customersBelongToVendorId = await UserModel.find({vendorId, roleType: userTypes.customer});
    // if (!customersBelongToVendorId) {

    // }
    return res.status(200).json({
        msg: "ok",
        isSuccess: true,
        data: customersBelongToVendorId,
    });
}


export const blockCustomer = async (req, res, next) => {
    const { customerId } = req.params;

    const isCustomerIdValid = mongoose.Types.ObjectId.isValid(customerId);
    
    if (!isCustomerIdValid) {
        throw new CustomError(
            "Customer id is not valid",
            404
        );
    }

    const updatedCustomerDoc = await UserModel.findByIdAndUpdate(customerId, { isDisable: true });

    if (!updatedCustomerDoc) {
        throw new CustomError("Customer not found", 404);
    }

    return res.status(200).json({
        msg: "Customer is blocked",
        isSuccess: true,
        // data: isActived,
    })  
}