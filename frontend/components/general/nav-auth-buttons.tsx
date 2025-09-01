"use client";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "@/components/ui/button"

type Props = {
    isAuthenticated?: boolean | null;
    userName: string | null;
};
export function NavAuthButtons({ isAuthenticated, userName }: Props) {
    return (
        <>
            {isAuthenticated ? (
                <div className="flex items-center justify-between w-full gap-2">
                    <h1>
                        Username: <span className=" font-bold">{userName}</span>
                    </h1>
                    <LogoutLink className={buttonVariants({ variant: "destructive" })}>
                        Logout
                    </LogoutLink>
                </div>

            ) : (
                <>
                    <RegisterLink className={buttonVariants({ variant: "outline" })}>Try Platform</RegisterLink>
                    <LoginLink className={buttonVariants()}>Sign in</LoginLink>
                </>
            )}
        </>
    );
}
