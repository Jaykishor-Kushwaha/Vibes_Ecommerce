// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config(); // Load .env variables

// const authRouter = require("./routes/auth/auth-routes");
// const adminProductsRouter = require("./routes/admin/products-routes");

// const MONGO_URI = process.env.MONGO_URI;

// // Connect to MongoDB
// mongoose
//   .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to MongoDB!"))
//   .catch((err) => console.error("Failed to connect to MongoDB:", err));

// const app = express();
// const PORT = process.env.PORT || 5000;

// // CORS Configuration
// const allowedOrigins = [process.env.CLIENT_BASE_URI];
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );

// // Middleware
// app.use(cookieParser());
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRouter);
// app.use("/api/admin/products", adminProductsRouter);

// app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env

// Import Routers
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const featureRouter = require("./routes/common/feature-routes"); // Feature router added

const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
const allowedOrigins = [process.env.CLIENT_BASE_URI];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Middleware
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/common/feature", featureRouter); // Feature router mounted

// Start the Server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
