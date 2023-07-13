import { PrismaClient } from "@prisma/client";

export async function getListings() {
  const prisma = new PrismaClient();
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return listings;
  } catch (error) {
    return new Error(error);
  }
}
