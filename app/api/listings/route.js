import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getCurrentUser } from "@/app/actions/getCurrentUser";

export async function POST(request) {
  const prisma = new PrismaClient();
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const body = await request.json();
  const {
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price,
  } = body;
  // if (
  //   title ||
  //   description ||
  //   imageSrc ||
  //   category ||
  //   roomCount ||
  //   bathroomCount ||
  //   guestCount ||
  //   location ||
  //   price
  // ) {
  //   return NextResponse.error();
  // }
  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      imageSrc,
      category,
      roomCount,
      bathroomCount,
      guestCount,
      locationValue: location.value,
      price: parseInt(price, 10),
      userId: currentUser.id,
    },
  });
  return NextResponse.json(listing);
}
