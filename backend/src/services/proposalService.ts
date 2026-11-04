// Import the Prisma client instance used to interact with the database
import { prisma } from "../config/prisma";

/**
 * Creates a new proposal for a job.
 *
 * @param jobId - The ID of the job the proposal is being submitted for
 * @param freelancerId - The ID of the freelancer submitting the proposal
 * @param amount - The proposed bid amount
 * @param coverLetter - The freelancer's cover letter/message
 * @returns The newly created proposal record
 */
export const createProposal = async (
  jobId: string,
  freelancerId: string,
  amount: number,
  coverLetter: string
) => {
  return prisma.proposal.create({
    data: {
      // Connect proposal to the specified job
      jobId,

      // Connect proposal to the freelancer who submitted it
      freelancerId,

      // Proposed payment amount for completing the job
      amount,

      // Message explaining why the freelancer is a good fit
      coverLetter,
    },
  });
};

/**
 * Retrieves all proposals submitted for a specific job.
 *
 * @param jobId - The ID of the job whose proposals should be retrieved
 * @returns An array of proposals, including freelancer information
 */
export const getJobProposals = async (
  jobId: string
) => {
  return prisma.proposal.findMany({
    // Filter proposals by the specified job ID
    where: {
      jobId,
    },

    // Include the related freelancer data in the response
    include: {
      freelancer: true,
    },
  });
};