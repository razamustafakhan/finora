import User from "../models/User.js";
import { comparePassword, generateHashPassword } from "../utils/password.js";
import { generateToken } from "../utils/token.js";

// ! CREATE A NEW ACCOUNT
const createAccount = async (req, res) => {
  // 1️⃣ Check for validation errors
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({
  //     success: false,
  //     errors: errors.array(),
  //   });
  // }

  try {
    const { userName, email, password } = req.body;
    const existAccount = await User.findOne({ email: email });
    if (existAccount) {
      return res.status(404).json({
        success: false,
        message: "Account Alredy Exsist",
      });
    }

    // 2️⃣ Hash the password
    const hashedPassword = await generateHashPassword(password);

    // 3️⃣ Save the user to DB (pseudo code)
    const user = {
      userName,
      email,
      password: hashedPassword,
    };
    await User.create(user);

    // 4️⃣ Return success
    res.status(201).json({
      success: true,
      message: "Account Created Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existAccount = await User.findOne({ email: email });
    console.log(existAccount);
    if (!existAccount) {
      return res.status(404).json({
        success: false,
        message: "Invalid Credentilas Email or password",
      });
    }

    // 2️⃣ Hash the password
    const isMatched = await comparePassword(password, existAccount.password);
    if (!isMatched) {
      return res.status(404).json({
        success: false,
        message: "Invalid Credentilas Email or password",
      });
    }

    const token = generateToken({
      _id: existAccount._id,
      email: existAccount.email,
      userName: existAccount.userName,
      role: existAccount.role,
    });
    // console.log(token);
    const isProduction = process.env.NODE_ENV === "production";

    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000,
      path: "/",
    });
    //  explain each and every line in detail  and other options also
    // 4️⃣ Return success
    res.status(200).json({
      success: true,

      message: "Login Successfully",
      token: token,

      user: {
        _id: existAccount._id,
        email: existAccount.email,
        userName: existAccount.userName,
        role: existAccount.role,
      },
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err,
    });
  }
};
export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
// const updateAccount = (req, res) => {
//   try {
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
// const deleteAccount = (req, res) => {
//   try {
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
// const profile = (req, res) => {
//   try {
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
// const updateProfile = (req, res) => {
//   try {
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
export {
  createAccount,
  login,
  //   updateAccount,
  //   deleteAccount,
  //   profile,
  //   updateProfile,
};
