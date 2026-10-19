import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import { getDashboardMetrics } from "../services/dashboardService";

export async function dashboardHandler(
  req: AuthRequest,
  res: Response
) {
  const metrics = await getDashboardMetrics(
    req.userId!
  );

  res.json(metrics);
}