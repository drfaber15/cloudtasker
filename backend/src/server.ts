import express from "express";
import userRoutes from "./routes/userRoutes";
import jobRoutes from "./routes/jobRoutes";
import dashboardRoutes from "./routes/dashboardRoute";
import proposalRoutes from "./routes/proposalRoutes";
cd /workspaces/cloudtasker/backend

find src -type f | sort

const app = express();

app.use(express.json());
app.use("/api", proposalRoutes);
app.use("/users", userRoutes);
app.use("/jobs", jobRoutes);
app.use("/dashboard", dashboardRoutes);

app.get("/", (_req, res) => {
  res.json({
    message: "Welcome to CloudTasker API",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});