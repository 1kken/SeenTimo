"use client";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Props = {
    isAuthenticated?: boolean | null;
    userName: string | null;
};
export function NavAuthButtons({ isAuthenticated, userName }: Props) {
    return (
        <>
            {isAuthenticated ? (
                <div className="flex items-center justify-between w-full gap-5">
                    <h1>
                        Username: <span className=" font-bold">{userName}</span>
                    </h1>
                    <LogoutLink className={twMerge(buttonVariants({ variant: "outline" }), "whitespace-nowrap")}>
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
