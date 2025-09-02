import { createWalletClient, createPublicClient, http, Hex } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { defineChain } from "viem";
import TransactionStorageJson from "./TransactionStorage.json";

const { abi } = TransactionStorageJson;

// 1. Define chain dynamically from env
const chain = defineChain({
  id: process.env.CHAIN_ID ? Number(process.env.CHAIN_ID) : 31337,
  name: process.env.NODE_ENV === "production" ? "Sepolia" : "Hardhat",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: { default: { http: [process.env.JSON_RPC_PROVIDER_URL!] } },
});

// 2. Wallet client (for writes)
const account = privateKeyToAccount(process.env.PRIVATE_KEY! as `0x${string}`);
const walletClient = createWalletClient({
  account,
  chain,
  transport: http(process.env.JSON_RPC_PROVIDER_URL!),
});

// 3. Public client (for reads/simulation)
const publicClient = createPublicClient({
  chain,
  transport: http(process.env.JSON_RPC_PROVIDER_URL!),
});

export async function savePaymentToBlockChain(
  sender: string,
  receiver: string,
  amount: number
) {
  // simulate first as per documentation
  const { request } = await publicClient.simulateContract({
    address: process.env.CONTRACT_ADDRESS! as Hex,
    abi,
    functionName: "savePayment",
    args: [sender, receiver, amount],
    account: account.address,
  });

  // send txn
  const hash = await walletClient.writeContract(request);

  return hash;
}

