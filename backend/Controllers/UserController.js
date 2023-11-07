import User from "../Models/User.js";
import { validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import { Resend } from "resend";
import NewsLetter from "../Models/Newsletter.js";
import { generateJwt, verifyJWT } from "../helpers/jwt.js";

/**
 * the function named createNewUser is for creating new User.
 * @param {*} req
 * @param {*} res
 * @returns
 */

export const createNewUser = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 12);
  const { firstName, lastName, address, email, password, mobilePhone } =
    req.body;
  try {
    const user = await User.create({
      firstName,
      lastName,
      address,
      email,
      password: hashedPassword,
      mobilePhone,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "user created successfully", user });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

/**
 * for authenticating user..!
 * @param {*} req
 * @param {*} res
 */
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Email or password does not exist" });
    }
    const checkPassword = bcrypt.compare(password, user.password);
    if (checkPassword) {
      const token = generateJwt(user.id);
      return res
        .cookie("jwt", token, {
          httpOnly: true,
          secure: false,
        })
        .status(StatusCodes.OK)
        .json({ message: "logged in successfully...!" });
    } else {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Email or password does not exist" });
    }
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

/**
 * for Changing the user password
 * @param {*} req
 * @param {*} res
 */
export const changingPassword = (req, res) => {
  try {
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

/**
 * The function name getAllUsers returns all users
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).lean(true);
    return res
      .status(StatusCodes.OK)
      .json({ users, message: "all users were retrieved...!" });
  } catch (error) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "could not get all users...!" });
  }
};

/**
 * getUserById returns a user based on id provided through parameters.
 * it can be used for showing the details of a user document
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const findUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.uId).lean(true);
    if (user) {
      return res.status(StatusCodes.OK).json({ user });
    }
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: `user with id=(${req.params.uId}) not found...!` });
  } catch (error) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: error.toString() });
  }
};

/**
 * for finding a user record based on the email
 * @param {*} req
 * @param {*} res
 */
export const findUserByEmail = async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email }).lean(true);
    if (user) {
      return res.status(StatusCodes.OK).json({ user });
    }
    return res.status(StatusCodes.NOT_FOUND).json({
      message: `user with Email Address=(${req.body.email}) not found...!`,
    });
  } catch (error) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: error.toString() });
  }
};

/**
 * this function is gonna find user by Id and update it
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const updateById = async (req, res) => {
  const update = { mobilePhone: req.body.mobilePhone };
  const isReturnNew = { new: true };
  try {
    const user = await User.findByIdAndUpdate(
      req.params.uId,
      update,
      isReturnNew
    );
    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `user with id=(${req.params.uId}) not found...!` });
    }
    return res.status(StatusCodes.OK).json({ user });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

/**
 * find user with email then update it's name
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const findByEmailAndUpdate = async (req, res) => {
  const { email, firstName } = req.body;
  const filter = { email };
  const update = { firstName };
  const renderNew = { new: true };
  try {
    const user = await User.findOneAndUpdate(filter, update, renderNew);
    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `user with email=(${email}) not found..!` });
    }
    return res.status(StatusCodes.OK).json({ user });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

/**
 * this function update all field of a user
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const updateAllField = async (req, res) => {
  const { firstName, lastName, address, email, password, mobilePhone } =
    req.body;
  const filter = { _id: req.params.uId };
  const update = { firstName, lastName, address, email, password, mobilePhone };
  const returnNew = { new: true };

  try {
    const user = await User.findOneAndUpdate(filter, update, returnNew);

    if (user) {
      return res.status(StatusCodes.OK).json({ user });
    }
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: `user with id=(${req.params._id}) not found..!` });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

/**
 * for deleting user by Id
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const deleteUserBasedById = async (req, res) => {
  const paramId = req.params.uId;
  try {
    const user = await User.findByIdAndDelete(paramId);
    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `user with id=(${paramId}) not found..!` });
    }
    return res.status(StatusCodes.OK).json({ message: "user was deleted..!" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

/**
 * this function is used for user subscription
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const subscribe = async (req, res) => {
  const filter = { email: req.body.email }; // Assuming email is sent in the request body
  const update = { subscribed: true, discountClaimed: true };
  const returnNew = { new: true };
  try {
    const user = await User.findOneAndUpdate(filter, update, returnNew);
    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `User with email (${req.body.email}) not found..!` });
    }
    return res
      .status(StatusCodes.OK)
      .json({ message: "You subscribed successfully...!" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
/**
 * for sending Newsletters to users
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const sendNewsletterToUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.uId).lean();
    const newsLetter = await NewsLetter.find({}).sort({ _id: -1 }).limit(1);
    if (user) {
      const resend = new Resend("re_YRfdyDcY_8cciGm7768gTRzcfuwa8wukW");
      const response = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "bloomexpress2023@gmail.com",
        subject: `${newsLetter[0].bouquetOfTheMonth}`,
        html: `<p>${newsLetter[0].exclusiveDiscount}! <strong>${newsLetter[0].floralTips}</strong>!</p>`,
      });
      // response object return and id, we can use it to hint
      return res
        .status(StatusCodes.OK)
        .json({ message: "response sent..!", response });
    }
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const logoutUser = (req, res) => {
  res
    .clearCookie("jwt", {
      httpOnly: true,
      secure: false,
    })
    .send("User logged out");
};
