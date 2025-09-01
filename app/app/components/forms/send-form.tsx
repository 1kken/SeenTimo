'use client'

import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import sendMoney from "./action";
import { useActionState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface UserOption {
  value: string;
  label: string;
}

interface User {
  id: string;
  name: string;
}

const loadUsers = async (inputValue: string): Promise<UserOption[]> => {
  if (!inputValue) return [];
  const res = await fetch(`/api/user/${inputValue}`);
  const data = await res.json();
  return data.users.map((u: User) => ({ value: u.id, label: u.name }));
};

const initialState = { message: "" };

export default function SendForm() {
  const [amount, setAmount] = useState("");
  const [selectedUser, setSelectedUser] = useState<UserOption | null>(null);
  const [state, formAction, pending] = useActionState(sendMoney, initialState);

  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Send Money</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="flex flex-col">
            <Label htmlFor="amount">Amount</Label>
            <Input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="receiver">Select Receiver</Label>
            <AsyncSelect
              cacheOptions
              defaultOptions
              loadOptions={loadUsers}
              onChange={(option) => setSelectedUser(option as UserOption)}
              value={selectedUser}
              placeholder="Search user..."
            />
            <input type="hidden" name="receiverId" value={selectedUser?.value || ""} />
          </div>

          {state?.message && (
            <p className="text-sm text-red-500" aria-live="polite">
              {state.message}
            </p>
          )}

          <Button type="submit" disabled={pending} className="w-full">
            Send
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

