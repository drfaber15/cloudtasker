import { Router } from "express";
import * as proposalController from "../controllers/proposalController";
import { authenticate } from "../middleware/authMiddleware";

const router = Router();

router.post(
  "/jobs/:jobId/proposals",
  authenticate,
  proposalController.createProposal
);

router.get(
  "/jobs/:jobId/proposals",
  authenticate,
  proposalController.getJobProposals
);

export default router;