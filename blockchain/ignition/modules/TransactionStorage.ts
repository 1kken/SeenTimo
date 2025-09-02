import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("TransactionStorageModule", (m) => {
  const storage = m.contract("TransactionStorage");

  return {storage};
});