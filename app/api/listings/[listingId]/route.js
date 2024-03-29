import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";
import { getCurrentUser } from "@/app/actions/getCurrentUser";

export async function DELETE(request, { params }) {
  const prisma = new PrismaClient();
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  const listing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
