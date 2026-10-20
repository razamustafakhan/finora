import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET;

/**
 * Generate JWT
 */
export const generateToken = (payload, expiresIn = "1d") => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

/**
 * Verify JWT (single reusable function)
 */
export const verifyToken = (token) => {
  try {
    if (!SECRET_KEY) {
      throw new Error("SECRET_KEY is not defined in environment variables");
    }

    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null;
  }
};
