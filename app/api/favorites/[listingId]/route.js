// listingId
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { PrismaClient } from "@prisma/client";

export async function POST(request, { params }) {
  const prisma = new PrismaClient();
  const { listingId } = params;
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  // if (!listingId || typeof listingId !== "string") {
  //   return NextResponse.error();
  // }
  let favoriteIds = [...(currentUser.favoriteIds || [])];
  favoriteIds.push(listingId);
  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds,
    },
  });

  return NextResponse.json({ user });
}
export async function DELETE(request, { params }) {
  const prisma = new PrismaClient();
  const { listingId } = params;
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  if (!listingId || typeof listingId !== "string") {
    return NextResponse.error();
  }
  let favoriteIds = [...(currentUser.favoriteIds || [])];
  favoriteIds = favoriteIds.filter((id) => id !== listingId);
  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds,
    },
  });
  return NextResponse.json({ user });
}
