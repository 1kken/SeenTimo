import { create } from "zustand"

type FinanceState = {
    totalSent: number
    totalReceived: number
    balance: number
    setTotalSent: (amount: number) => void
    setTotalReceived: (amount: number) => void
    setBalance: (amount: number) => void
    fetchFinance: (userId: string) => Promise<void>
    sendMoney: (userId: string, receiverId: string, amount: number, txnHash: string) => Promise<void>
}

export const useFinanceStore = create<FinanceState>((set) => ({
    totalSent: 0,
    totalReceived: 0,
    balance: 0,
    setTotalSent: (amount: number) => set({ totalSent: amount }),
    setTotalReceived: (amount: number) => set({ totalReceived: amount }),
    setBalance: (amount: number) => set({ balance: amount }),
    // ---------------------------
    // Fetch finance data from API
    fetchFinance: async (userId: string) => {
        try {
            const res = await fetch(`/api/user/finance/${userId}`)
            if (!res.ok) throw new Error("Failed to fetch finance data")
            const data = await res.json()

            set({
                totalSent: data.totalSent,
                totalReceived: data.totalReceived,
                balance: data.balance,
            })
        } catch (error) {
            console.error("Finance fetch error:", error)
        }
    },

    // ---------------------------
    // Send cookie (transaction)
    sendMoney: async (userId: string, receiverId: string, amount: number, txnHash: string) => {
        try {
            const res = await fetch("/api/user/send-money", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userid: userId, receiverId, amount, txnHash }),
            })

            if (!res.ok) {
                const errorData = await res.json()
                throw new Error(errorData.error || "Failed to send cookie")
            }

            const updatedSender = await res.json()

            // Update store with latest balances
            set((state) => ({
                totalSent: state.totalSent + amount,
                balance: updatedSender.balance,
            }))
        } catch (error) {
            console.error("Send money error:", error)
        }
    },
}))


