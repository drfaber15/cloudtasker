import { Router } from "express";
import { authenticate } from "../middleware/authMiddleware";
import { dashboardHandler } from "../controllers/dashboardController";

const router = Router();

router.get(
  "/",
  authenticate,
  dashboardHandler
);

export default router;