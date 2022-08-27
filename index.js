const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/auth.routes");
const incomesRoutes = require("./routes/incomes.routes");
const expensesRoutes = require("./routes/expenses.routes");

require("./config/db");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// USER ROUTES
app.use("/user", userRoutes);

// INCOMES ROUTES
app.use("/incomes", incomesRoutes);

// EXPENSES ROUTES
app.use("/expenses", expensesRoutes);

// PORT APP
app.listen(port, () => {
  console.log("Server running on port " + port);
});
