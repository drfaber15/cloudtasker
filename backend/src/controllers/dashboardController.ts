// Import the Express Response type for sending HTTP responses
import { Response } from "express";

// Import the custom AuthRequest interface, which extends
// the standard Express Request object to include the authenticated user's ID
import { AuthRequest } from "../middleware/authMiddleware";

// Import the service function responsible for gathering
// dashboard metrics from the database
import { getDashboardMetrics } from "../services/dashboardService";

/**
 * Handles requests to retrieve dashboard data for the authenticated user.
 *
 * @param req - The authenticated request containing the user's ID
 * @param res - The Express response object used to return data to the client
 */
export async function dashboardHandler(
  req: AuthRequest,
  res: Response
) {
  // Retrieve dashboard statistics for the currently authenticated user
  const metrics = await getDashboardMetrics(
    req.userId!
  );

  // Return the dashboard metrics as a JSON response
  res.json(metrics);
}