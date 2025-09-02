# Seentimo

Seentimo is an experimental platform exploring how **blockchain technology** can be leveraged to make **government financial transactions transparent, trustworthy, and publicly auditable**.  

This project is inspired by the proposal of **Senator Bam Aquino**, who suggested using blockchain to make the Philippine government’s financial transactions—and eventually the entire national budget—transparent and accessible to the public.  
*(Credits: PhilStar Article)*

---

## 🔹 Core Idea

Seentimo **does not digitize the peso**. Instead, it uses blockchain for **logging, immutability, and auditability**. Every peso flow is recorded as a verifiable blockchain log that **cannot be altered**, demonstrating a clear, auditable financial trail.

---

## 🔹 Features

### 1. User Signup & Authentication
- Authentication is powered by **Kinde**.
- Safe signup—**no personal data is stored** by the platform.

### 2. Mock Budget Allocation
- Every new user receives a **₱1,000,000 mock budget**.
- Simulates government budget allocation at a high level.

### 3. Send & Receive Transactions
- Users can send and receive funds.
- Each transaction includes:
  - Sender name & ID
  - Receiver name & ID
  - Amount transferred
  - Timestamp
  - Ethereum Sepolia transaction hash

### 4. Blockchain Logging
- Smart contracts are built and deployed using **Hardhat**.
- Every transaction is logged on the **Ethereum Sepolia testnet**.
- Transaction details are stored in **Postgres via Prisma**, linked to an immutable on-chain proof.

### 5. Public Transparency Dashboard
- Anyone can view the **full transaction flow** without logging in.
- Authenticated users can verify transactions via **Etherscan Sepolia**.

---

## 🔹 Tech Stack

- **Next.js** – Frontend framework  
- **Prisma** – ORM for database management  
- **Kinde** – Authentication & user management  
- **Viem** – Ethereum blockchain client  
- **Hardhat** – Smart contract development & deployment  

---

## 🔹 Why This Matters

- Demonstrates how blockchain can enable **auditing of public funds**.
- Serves as an **MVP prototype** of a transparent budget system.
- Bridges the gap between **traditional finance** and **blockchain auditing tools**, without converting money into cryptocurrency.

---

## 👉 Summary

Seentimo = **“See where every sentimo goes.”**  

It is a sandbox for experimenting with **blockchain-backed government budget transparency** in the Philippine context, featuring:  
- Secure login via **Kinde**  
- Smart contracts developed in **Hardhat**  
- Data safely managed with **Prisma + Postgres**
