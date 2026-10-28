import prisma from "../config/prisma";

export const createProposal = async (
  jobId: string,
  freelancerId: string,
  amount: number,
  coverLetter: string
) => {
  return prisma.proposal.create({
    data: {
      jobId,
      freelancerId,
      amount,
      coverLetter,
    },
  });
};

export const getJobProposals = async (
  jobId: string
) => {
  return prisma.proposal.findMany({
    where: {
      jobId,
    },
    include: {
      freelancer: true,
    },
  });
};npm run dev