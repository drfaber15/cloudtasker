
import { Request, Response } from "express";
import * as proposalService from "../services/proposalService";

// Controller function that handles creating a new proposal for a job.
// It receives the request from the client and sends back a response.
export const createProposal = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Extract the amount and cover letter from the request body.
    // These are the details the freelancer submitted with their proposal.
    const { amount, coverLetter } = req.body;

    // Get the job ID from the URL parameters.
    // String() ensures the job ID is treated as a string.
    const jobId = String(req.params.jobId);

    // Get the freelancer's ID from the authenticated user's information.
    // The "as any" allows access to the custom user property on the request.
    const freelancerId = (req as any).user?.id;

    // Call the proposal service to create and save the proposal.
    // Pass the job ID, freelancer ID, proposed amount, and cover letter.
    const proposal = await proposalService.createProposal(
      jobId,
      freelancerId,
      amount,
      coverLetter
    );

    // Send a 201 Created status along with the newly created proposal.
    res.status(201).json(proposal);

  } catch (error) {
    // Log the error in the server console to help with debugging.
    console.error(error);

    // If something goes wrong, send a 500 Internal Server Error response.
    res.status(500).json({
      message: "Failed to create proposal",
    });
  }
};

// Controller function that retrieves all proposals submitted
// for a specific job.
export const getJobProposals = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Get the job ID from the URL parameters.
    const jobId = String(req.params.jobId);

    // Call the proposal service to retrieve all proposals
    // associated with this specific job ID.
    const proposals = await proposalService.getJobProposals(
      jobId
    );

    // Send a 200 OK status along with the list of proposals.
    res.status(200).json(proposals);

  } catch (error) {
    // Log the error in the server console for debugging purposes.
    console.error(error);

    // If something goes wrong, send a 500 Internal Server Error response.
    res.status(500).json({
      message: "Failed to fetch proposals",
    });
  }
};
