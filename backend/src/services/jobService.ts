export async function updateJobStatus(
  id: string,
  status: string,
  userId: string
) {
  return prisma.job.update({
    where: {
      id,
      userId,
    },
    data: {
      status,
    },
  });
}