"use client";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "@/components/ui/button"

type Props = {
    isAuthenticated?: boolean | null;
};
export function NavAuthButtons({isAuthenticated}: Props) {
    return (
        <>
            {isAuthenticated ? (
                <LogoutLink className={buttonVariants({ variant: "destructive" })}>
                    Logout
                </LogoutLink>
            ) : (
                <>
                    <RegisterLink className={buttonVariants({ variant: "outline" })}>Try Platform</RegisterLink>
                    <LoginLink className={buttonVariants()}>Sign in</LoginLink>
                </>
            )}
        </>
    );
}
