// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TransactionStorage {
    struct Payment {
        string senderName;
        string receiverName;
        uint256 amount;
    }

    Payment[] public payments;

    event PaymentSaved(string senderName, string receiverName, uint256 amount);

    function savePayment(string calldata senderName, string calldata receiverName, uint256 amount) external {
        payments.push(Payment(senderName, receiverName, amount));
        emit PaymentSaved(senderName, receiverName, amount);
    }

    function getPayment(uint256 index) external view returns (string memory, string memory, uint256) {
        Payment storage p = payments[index];
        return (p.senderName, p.receiverName, p.amount);
    }

    function totalPayments() external view returns (uint256) {
        return payments.length;
    }
}
