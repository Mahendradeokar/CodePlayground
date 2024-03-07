import { USER_TYPE } from "../constants/index.js";
import { userModel } from "../models/user.js";

export const getAllVendors = async (req, res, next) => {
  const vendors = await userModel
    .find({ role: USER_TYPE.VENDOR })
    .select("-pwd");
  res.sendResponse.success({
    data: vendors,
    statusCode: 200,
  });
};

export const approveVendor = async (req, res) => {
  const { vendorId } = req.params;

  const updatedVendor = await userModel.findByIdAndUpdate(vendorId, {
    isApprove: true,
  });

  res.sendResponse.success({ statusCode: 200 });
};

export const deleteVendor = async (req, res) => {
  const { vendorId } = req.params;

  const deletedVendor = await userModel.findByIdAndUpdate(vendorId, {
    isDeleted: true,
  });

  res.sendResponse.success({ statusCode: 200 });
};
