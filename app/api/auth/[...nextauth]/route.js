import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import prisma from "@/app/libs/prismadb";
import { PrismaClient } from "@prisma/client";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "with your email",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "please enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "please enter your password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error("please enter email and password");
        }
        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });
        if (!user || !user.hashedPassword) {
          throw new Error("user not found");
        }
        const isCurrectPassword = await bcrypt.compare(
          password,
          user.hashedPassword
        );
        if (!isCurrectPassword) {
          throw new Error("password is not correct");
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
    error: '/not-found',

    
  },
  debug: process.env.NODE_ENV === "development",
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
