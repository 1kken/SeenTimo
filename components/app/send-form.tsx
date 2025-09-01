'use client'

import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import sendMoney from "./action";
import { useActionState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";

interface UserOption {
    value: string;
    label: string;
}

interface User {
    id: string;
    userName: string;
}

const loadUsers = async (inputValue: string): Promise<UserOption[]> => {
    if (!inputValue) return [];
    const res = await fetch(`/api/user/${inputValue}`);
    const data = await res.json();
    return data.users.map((u: User) => ({ value: u.id, label: u.userName }));
};

const initialState = { message: "" };

export function SendForm() {
    const [amount, setAmount] = useState("");
    const [selectedUser, setSelectedUser] = useState<UserOption | null>(null);
    const [state, formAction, pending] = useActionState(sendMoney, initialState);

    return (
        <Card className="bg-white shadow-sm border-slate-200  mx-auto mt-8">
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                    <SendIcon className="h-5 w-5 text-blue-600" />
                    Send Funds
                </CardTitle>
                <p className="text-sm text-slate-500 mt-1">
                    Allocate funds to other users. Transactions are securely recorded.
                </p>
            </CardHeader>

            <CardContent className="space-y-6">
                <form action={formAction} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="receiver" className="text-sm font-medium text-slate-700">
                                Select Receiver
                            </Label>
                            <AsyncSelect
                                cacheOptions
                                defaultOptions
                                loadOptions={loadUsers}
                                onChange={(option) => setSelectedUser(option as UserOption)}
                                value={selectedUser}
                                placeholder="Search user..."
                                className="w-full" // outer wrapper full width
                                classNames={{
                                    control: (state) =>
                                        `w-full border rounded-md p-1 ${state.isFocused ? 'border-blue-600' : 'border-gray-300'}`,
                                    option: (state) =>
                                        `p-2 cursor-pointer ${state.isSelected ? 'bg-blue-100 text-blue-800' : ''}`,
                                    singleValue: () => 'text-gray-900',
                                }}
                            />
                            <input
                                type="hidden"
                                name="receiverId"
                                value={selectedUser?.value || ""}
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="amount" className="text-sm font-medium text-slate-700">
                                Amount (PHP)
                            </Label>
                            <Input
                                id="amount"
                                type="number"
                                placeholder="0.00"
                                name="amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                min="0"
                                step="0.01"
                                className="w-full"
                            />
                        </div>
                    </div>

                    {state?.message && (
                        <p className="text-sm text-red-500" aria-live="polite">
                            {state.message}
                        </p>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                        <div className="text-sm text-slate-600">
                            <p>Transaction will be recorded on Ethereum Sepolia testnet</p>
                            <p className="text-xs text-slate-500 mt-1">Gas fees will be covered by the system</p>
                        </div>
                        <Button
                            type="submit"
                            disabled={pending || !selectedUser || !amount}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                        >
                            Send Funds
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}


