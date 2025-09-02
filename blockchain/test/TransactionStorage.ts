import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";

describe("TransactionStorage", async () => {
  const { viem } = await network.connect();
  const publicClient = await viem.getPublicClient();

  it("Should emit PaymentSaved event when saving a payment", async () => {
    const txStore = await viem.deployContract("TransactionStorage");

    await viem.assertions.emitWithArgs(
      txStore.write.savePayment(["Alice", "Bob", 100n]),
      txStore,
      "PaymentSaved",
      ["Alice", "Bob", 100n]
    );
  });

  it("Should store and retrieve a payment correctly", async () => {
    const txStore = await viem.deployContract("TransactionStorage");

    await txStore.write.savePayment(["Alice", "Bob", 100n]);

    const payment = await txStore.read.getPayment([0]);
    assert.equal(payment[0], "Alice");
    assert.equal(payment[1], "Bob");
    assert.equal(payment[2], 100n);
  });

  it("Should count total payments", async () => {
    const txStore = await viem.deployContract("TransactionStorage");

    await txStore.write.savePayment(["Alice", "Bob", 100n]);
    await txStore.write.savePayment(["Charlie", "Dave", 200n]);

    const total = await txStore.read.totalPayments();
    assert.equal(total, 2n);
  });
});
