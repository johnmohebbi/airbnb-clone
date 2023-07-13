import { getCurrentUser } from "@/app/actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";
import React from "react";
import ListingClient from "./ListingClient";
import getListingById from "@/app/actions/getListingById";

const listingPage = async ({ params }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
  if (!listing) {
    return <EmptyState showReset />;
  }
  return (
    <>
      <ListingClient listing={listing} currentUser={currentUser} />
    </>
  );
};

export default listingPage;
