import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import {
  createJob,
  getJobs,
} from "../services/jobService";

/**
 * Creates a new job for the authenticated user.
 *
 * Expected request body:
 * {
 *   title: string,
 *   description: string
 * }
 */
export async function createJobHandler(
  req: AuthRequest,
  res: Response
) {
  // Extract job details from the request body
  const { title, description } = req.body;

  // Create a new job and associate it with the logged-in user
  const job = await createJob(
    title,
    description,
    req.userId!
  );

  // Return the newly created job with HTTP 201 (Created)
  res.status(201).json(job);
}

/**
 * Retrieves all jobs associated with the authenticated user.
 */
export async function getJobsHandler(
  req: AuthRequest,
  res: Response
) {
  // Fetch jobs belonging to the logged-in user
  const jobs = await getJobs(
    req.userId!
  );

  // Return the list of jobs
  res.json(jobs);
}

import { updateJobStatus } from "../services/jobService";

/**
 * Updates the status of an existing job.
 *
 * Expected:
 * - req.params.id: Job ID
 * - req.body.status: New job status
 */
export async function updateJobStatusHandler(
  req: any,
  res: Response
) {
  // Update the job status if the user has permission
  const job = await updateJobStatus(
    req.params.id,
    req.body.status,
    req.userId
  );

  // Return the updated job
  res.json(job);
}