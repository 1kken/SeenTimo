import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/lib/prisma";
import { NavMenu } from "../general/nav-menu";

async function getUserName(userId: string | null) {
  if (!userId) return null;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { userName: true },
  });

  return user?.userName ?? null;
}

export async function Navbar() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const authenticated = await isAuthenticated();
  const user = authenticated ? await getUser() : null;
  const userName = user ? await getUserName(user.id) : null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <NavMenu isAuthenticated={authenticated} userName={userName} />
    </nav>
  );
}

