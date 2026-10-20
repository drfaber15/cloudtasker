import express from "express";
import userRoutes from "./routes/userRoutes";
import jobRoutes from "./routes/jobRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";
app.use("/dashboard", dashboardRoutes);

const app = express();

app.use(express.json());
app.use("/jobs", jobRoutes);

app.get("/", (_req, res) => {
  res.json({
    message: "Welcome to CloudTasker API",
  });
});

app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
