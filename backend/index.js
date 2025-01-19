const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDb = require("./libs/db.js");
const productRoute = require("./routes/product.route.js");
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/User.js")
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
connectDb(app);
app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
      methods: ["POST", "GET", "DELETE", "OPTIONS", "PUT", "PATCH"],
    credentials: true,
  })
);

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use((req, res, next) => {
  console.log(req.body);
  next();
});

app.use("/api/products", productRoute);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Hello from the API server");
});
