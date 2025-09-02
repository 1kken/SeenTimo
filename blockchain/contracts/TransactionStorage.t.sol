// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../contracts/TransactionStorage.sol";

contract TransactionStorageTest is Test {
    TransactionStorage txStore;

    function setUp() public {
        txStore = new TransactionStorage();
    }

    function testSavePayment() public {
        txStore.savePayment("Alice", "Bob", 100);

        (string memory sender, string memory receiver, uint amount) = txStore.getPayment(0);

        assertEq(sender, "Alice");
        assertEq(receiver, "Bob");
        assertEq(amount, 100);
    }

    function testTotalPayments() public {
        txStore.savePayment("Alice", "Bob", 100);
        txStore.savePayment("Charlie", "Dave", 200);

        uint total = txStore.totalPayments();
        assertEq(total, 2);
    }
}
