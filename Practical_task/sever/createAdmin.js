import { USER_TYPE } from "./constants/index.js";
import { userModel } from "./models/user.js";
import { bcryptPwd, validateFields } from "./utils/index.js";

export const createAdmin = async () => {
  try {
    const userEmail = process.env.ADMIN_EMAIL;
    const pwd = process.env.ADMIN_PWD;

    const error = validateFields({ ADMIN_EMAIL: userEmail, ADMIN_PWD: pwd });

    if (error) {
      throw new Error("Please provide the ADMIN_EMAIL and ADMIN_PWD in env");
    }

    const hashedPwd = await bcryptPwd(pwd);
    await userModel.create({
      email: userEmail,
      pwd: hashedPwd,
      isApprove: true,
      role: USER_TYPE.ADMIN,
    });

    console.log("Admin created...");
  } catch (error) {
    console.error("Error while creating admin.......", error);
  }
};
