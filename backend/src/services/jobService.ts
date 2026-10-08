import { prisma } from "../config/prisma";

export async function createJob(
  title: string,
  description: string,
  userId: string
) {
  return prisma.job.create({
    data: {
      title,
      description,
      userId,
    },
  });
}

export async function getJobs(
  userId: string
) {
  return prisma.job.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
