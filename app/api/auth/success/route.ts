import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { generateFromEmail } from "unique-username-generator";

export async function GET() {
  try {

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id) {
      return NextResponse.json({ error: "Authentication failed" }, { status: 401 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { id: user?.id || "" },
    });


    if (!existingUser) {
      // Generate a unique username based on the user's email
      await prisma.user.create({
        data: {
          id: user.id,
          userName: generateFromEmail(user.email || "unknown_user@unknown.com",4),
        }
      });
    }

    const redirectUrl = process.env.NEXT_PUBLIC_APP_URL ? new URL('/dashboard', process.env.NEXT_PUBLIC_APP_URL) : 'http://localhost:3000/dashboard';
    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error('Error in authentication:', error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}