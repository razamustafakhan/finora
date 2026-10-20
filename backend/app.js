import express from "express";
import cors from "cors";
import helmet from "helmet";
import authRoute from "./routes/auth.routes.js";
import authMeRoute from "./routes/auth.me.route.js";
import loanRoute from "./routes/loan.route.js";
import cookieParser from "cookie-parser";

const app = express();

// Security
app.use(helmet());
app.use(cookieParser());

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// const allowedOrigins = [
//   "http://localhost:3000", // * Web app
//   "http://localhost:8081", // * Expo web
// ];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       // * Allow requests without an origin, such as Postman.
//       if (!origin || allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       }

//       // ! Reject unapproved origins.
//       return callback(new Error("Not allowed by CORS"));
//     },
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));

// Parse JSON
app.use(express.json());

// Parse form data
// app.use(express.urlencoded({ extended: true }));

// auth routes define
app.use("/api", authRoute);
app.use("/api", authMeRoute);
app.use("/api/loan", loanRoute);

export default app;
