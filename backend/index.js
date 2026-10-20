import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.js";
// dotenv.config();

const PORT = 5000 || process.env.PORT;
app.get("/", (req, res) => {
  res.send("<h1>This is for Test That server  is running</h1>");
});
// console.log("CLIENT_URL:", process.env.CLIENT_URL);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server is running");
  });
});
