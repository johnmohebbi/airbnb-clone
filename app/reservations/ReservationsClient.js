'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";



const ReservationsClient = () => {
  return (
    <Container>
      <Heading 
       title="Reservations"
       subtitle="Bookings on your properties"
      />
    </Container>
  )
}

export default ReservationsClient
