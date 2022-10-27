const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/auth.routes");
const incomesRoutes = require("./routes/incomes.routes");
const expensesRoutes = require("./routes/expenses.routes");
const { verifyToken } = require("./middlewares/auth.middleware");
const cors = require("cors");
require("./config/db");

const app = express();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Hello World 🌏");
});

// USER ROUTES
app.use("/user", userRoutes);

// INCOMES ROUTES
app.use("/incomes", verifyToken, incomesRoutes);

// EXPENSES ROUTES
app.use("/expenses", verifyToken, expensesRoutes);

// PORT APP
app.listen(port, () => {
  console.log("Server running on port " + port);
});
