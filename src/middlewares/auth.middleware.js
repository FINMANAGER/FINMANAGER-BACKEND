export default function authoriseUser(req, res, next) {
  const isAuthorised = false;
  try {
    next();
    if (!isAuthorised) {
      throw new Error("unAuthorised user");
    }
  } catch (error) {
    res.status(403).json({ errorMessage: error.message });
  }
}
