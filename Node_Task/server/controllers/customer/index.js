import { UserModel } from "../../models/user.js";

export const getCustomerData = async (req, res, next) => {
  const { _id: customerId } = req.user;

  const customerData = await UserModel.findById(customerId).lean();

  delete customerData.password;
  return res.status(200).json({
    msg: "ok",
    isSuccess: true,
    data: customerData,
  });
};
