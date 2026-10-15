import { prisma } from "../config/prisma";

export async function getDashboardMetrics(
  userId: string
) {
  const totalJobs = await prisma.job.count({
    where: { userId },
  });

  const pendingJobs = await prisma.job.count({
    where: {
      userId,
      status: "PENDING",
    },
  });

  const runningJobs = await prisma.job.count({
    where: {
      userId,
      status: "RUNNING",
    },
  });

  const completedJobs = await prisma.job.count({
    where: {
      userId,
      status: "COMPLETED",
    },
  });

  const failedJobs = await prisma.job.count({
    where: {
      userId,
      status: "FAILED",
    },
  });

  return {
    totalJobs,
    pendingJobs,
    runningJobs,
    completedJobs,
    failedJobs,
  };
}