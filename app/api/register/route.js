import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

import bycrypt from "bcrypt";
export async function POST(request) {
  const url = process.env.MONGODB_URI;
  const body = await request.json();
  const { name, email, password } = body;
  const hashedPassword = await bycrypt.hash(password, 12);

  // use `prisma` in your application to read and write data in your DB

  const prisma = new PrismaClient();
  // create a user in db
  const user = await prisma.user.create({
    data: {
      email: email,
      hashedPassword: hashedPassword,
      name: name,
    },
  });
  // send user to client

  return NextResponse.json(user);
}
