import { NextResponse } from "next/server";

import { getCurrentUser } from "@/app/actions/getCurrentUser";

import { PrismaClient } from "@prisma/client";

export async function DELETE(request, { params }) {
  const currentUser = await getCurrentUser();
  const prisma = new PrismaClient();
  if (!currentUser) {
    return NextResponse.error();
  }
  const { reservationId } = params;
  if (!reservationId || typeof reservationId !== "string") {
    throw new Error("Invalid ID");
  }
  const reservation = await prisma.reservation.deleteMany({
    where: {
      id: reservationId,
      OR: [
        { userId: currentUser.id },
        { listing: { userId: currentUser.id } }
      ]
    },
  });
  return NextResponse.json(reservation);
}
