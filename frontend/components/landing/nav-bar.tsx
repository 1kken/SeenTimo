
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NavMenu } from "../general/nav-menu";

export async function Navbar() {
    const {isAuthenticated} = getKindeServerSession();
    const authenticated = await isAuthenticated();


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <NavMenu isAuthenticated={authenticated} />
    </nav>
  )
}
