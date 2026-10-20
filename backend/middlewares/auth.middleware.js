import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  // * Web: read token from the HTTP-only cookie.
  const cookieToken = req.cookies?.token;

  // * Expo: read token from the Authorization header.
  const authHeader = req.headers.authorization;
  const bearerToken = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7)
    : null;

  const token = cookieToken || bearerToken;
  console.log("token>>>>>>", token);

  // ! Reject requests without a token.
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Authentication required",
    });
  }

  try {
    // * Verify the token signature and expiry.
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);

    // * Make the authenticated user's claims available to the route.
    req.user = decoded;

    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
