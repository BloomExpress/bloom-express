import { verifyJWT } from "../helpers/jwt.js";
import { StatusCodes } from "http-status-codes";

export function authorizeJwt(req, res, next) {
  console.log(req.cookies.jwt);
  if (!req.cookies.jwt) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Unauthorized" });
  }

  try {
    const isValid = verifyJWT(req.cookies.jwt);
    console.log("isValid token", isValid);
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Unauthorized" });
  }

  next();
}
