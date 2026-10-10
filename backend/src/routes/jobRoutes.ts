import { Router } from "express";

import {
  createJobHandler,
  getJobsHandler,
} from "../controllers/jobController";

import { authenticate } from "../middleware/authMiddleware";

const router = Router();

router.post(
  "/",
  authenticate,
  createJobHandler
);

router.get(
  "/",
  authenticate,
  getJobsHandler
);

export default router;