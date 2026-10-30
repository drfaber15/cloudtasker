import { Request, Response } from "express";
import * as proposalService from "../services/proposalService";

export const createProposal = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { amount, coverLetter } = req.body;

    const jobId = String(req.params.jobId);
    const freelancerId = (req as any).user?.id;

    const proposal = await proposalService.createProposal(
      jobId,
      freelancerId,
      amount,
      coverLetter
    );

    res.status(201).json(proposal);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create proposal",
    });
  }
};

export const getJobProposals = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const jobId = String(req.params.jobId);

    const proposals = await proposalService.getJobProposals(
      jobId
    );

    res.status(200).json(proposals);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch proposals",
    });
  }
};