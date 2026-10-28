import { Request, Response } from "express";
import * as proposalService from "../services/proposalService";

export const createProposal = async (
  req: Request,
  res: Response
) => {
  try {
    const { amount, coverLetter } = req.body;

    const proposal = await proposalService.createProposal(
      req.params.jobId,
      (req as any).user.id,
      amount,
      coverLetter
    );

    res.status(201).json(proposal);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create proposal",
    });
  }
};

export const getJobProposals = async (
  req: Request,
  res: Response
) => {
  try {
    const proposals = await proposalService.getJobProposals(
      req.params.jobId
    );

    res.json(proposals);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch proposals",
    });
  }
};