import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import {
  createJob,
  getJobs,
} from "../services/jobService";

export async function createJobHandler(
  req: AuthRequest,
  res: Response
) {
  const { title, description } =
    req.body;

  const job = await createJob(
    title,
    description,
    req.userId!
  );

  res.status(201).json(job);
}

export async function getJobsHandler(
  req: AuthRequest,
  res: Response
) {
  const jobs = await getJobs(
    req.userId!
  );

  res.json(jobs);
}
import { updateJobStatus } from "../services/jobService";

export async function updateJobStatusHandler(
  req: any,
  res: Response
) {
  const job = await updateJobStatus(
    req.params.id,
    req.body.status,
    req.userId
  );

  res.json(job);
}