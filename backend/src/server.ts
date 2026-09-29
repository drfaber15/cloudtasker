const express = require("express");

const app = express();

app.get("/health", (_req: any, res: any) => {
  res.json({
    status: "ok",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});