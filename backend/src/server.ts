import express from "express";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Welcome to CloudTasker API",
  });
});

app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
