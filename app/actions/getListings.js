import { PrismaClient } from "@prisma/client";

export async function getListings(params) {
  const { userId } = params;
  const prisma = new PrismaClient();
  try {
    let query={}
    if(userId){
      query.userId = userId
    }
    const listings = await prisma.listing.findMany({
      where:query,
      orderBy: {
        createdAt: "desc",
      },
    });
    return listings;
  } catch (error) {
    return new Error(error);
  }
}
