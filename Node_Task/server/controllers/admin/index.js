import { userTypes } from "../../constants/index.js"
import { UserModel } from "../../models/user.js"
import { CustomError } from "../../utils/CustomError.js";

export const getVendorsController = async (req, res, next) => {
    const vendorsList = await UserModel.find({
        roleType: userTypes.vendor,
    });

    return res.status(200).json({
        isSuccess: true,
        message: "Vendors list got",
        data: vendorsList,
    })
}

export const activeVendor = async (req, res, next) => {
    const { vendorId } = req.params;
    
    const isUpdated = await UserModel.findByIdAndUpdate(vendorId, {
        isDisable: false,
    });

    if (!isUpdated) {
        throw new CustomError("Vendor id is not valid", 404);
    }

    console.log(isActived);
    return res.status(200).json({
        msg: "Vendor actived",
        isSuccess: true,
        // data: isActived,
    })  
}