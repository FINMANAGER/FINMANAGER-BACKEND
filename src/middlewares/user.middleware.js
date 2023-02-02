import { userModel } from "../validations/user.validation.js";
export default async function userMiddleware(req, res, next) {
  try {
    await userModel.validate({ ...req.body }).catch((err) => {
      throw Error(err.errors[0]);
    });
    return next();
  } catch (error) {
    res.status(400).json({ errorMessage: error.message });
  }
}
