import { PrismaClient } from "@prisma/client";
import React from "react";
import { getCurrentUser } from "./getCurrentUser";

export default async function getFavoriteListings() {
  const prisma = new PrismaClient();
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return [];
    }
    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });
    const safeFavorites = favorites.map((favorite) => ({
      ...favorite,
      createdAt: favorite.createdAt.toISOString(),
    }));
    return safeFavorites;
  } catch (error) {
    throw new Error(error)
  }
}
