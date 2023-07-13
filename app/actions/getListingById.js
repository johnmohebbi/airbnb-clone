// import { PrismaClient } from "@prisma/client";
import prisma from "@/app/libs/prismadb";
export default async function getListingById(params) {
  // const prisma = new PrismaClient();
  try {
    const { listingId } = params;

    const listing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
    });

    if (!listing) {
      return null;
    }

    return {
      ...listing,
    };
  } catch (error) {
    throw new Error(error);
  }
}
