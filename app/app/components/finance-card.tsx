"use client";
import { PhilippinePeso, Send, HandCoins } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NumberFlow from "@number-flow/react";
import { useFinanceStore } from "../finance";
import { useEffect } from "react";

interface FinanceCardWrapperProps {
    balanceProp: number;
    totalSentProp: number;
    totalReceivedProp: number;
}

interface FinanceCardProps {
    title: React.ReactNode;
    value: number;
    cardClassName?: string;
    contentClassName?: string;
}

export const FinanceCard: React.FC<FinanceCardProps> = ({
    title,
    value,
    cardClassName = "",
    contentClassName = "",
}) => (
    <Card className={`w-full max-w-sm mx-auto  ${cardClassName}`}>
        <CardHeader>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent
            className={`flex justify-center items-center py-4 text-2xl sm:text-3xl lg:text-4xl font-bold ${contentClassName}`}
        >
            <NumberFlow
                value={value}
                format={{
                    style: "currency",
                    currency: "PHP",
                    trailingZeroDisplay: "stripIfInteger",
                }}
            />
        </CardContent>
    </Card>
);

export const FinanceCardWrapper: React.FC<FinanceCardWrapperProps> = ({
    balanceProp,
    totalSentProp,
    totalReceivedProp,
}) => {
    const { setBalance, setTotalSent, setTotalReceived, balance, totalSent, totalReceived } = useFinanceStore();

    useEffect(() => {
        setBalance(balanceProp);
        setTotalSent(totalSentProp);
        setTotalReceived(totalReceivedProp);
        console.log("FinanceCardWrapper props updated:", {
            balanceProp,
            totalSentProp,
            totalReceivedProp,
        });
    }, [balanceProp, totalSentProp, totalReceivedProp, setBalance, setTotalSent, setTotalReceived]);


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
            <div className="col-span-1 md:col-span-1">
                <FinanceCard
                    title={
                        <div className="flex items-center gap-2">
                            <PhilippinePeso size={16} /> Total Balance
                        </div>
                    }
                    value={balance}
                    cardClassName="bg-green-100 text-green-800"
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 col-span-1 md:col-span-2 gap-2">
                <FinanceCard
                    title={
                        <div className="flex items-center gap-2">
                            <Send size={16} /> Total Sent
                        </div>
                    }
                    value={totalSent}
                    cardClassName="bg-red-100 text-red-800"
                />
                <FinanceCard
                    title={
                        <div className="flex items-center gap-2">
                            <HandCoins size={16} /> Total Received
                        </div>
                    }
                    value={totalReceived}
                    cardClassName="bg-blue-100 text-blue-800"
                />
            </div>
        </div>
    );
};





