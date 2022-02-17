//SPDX-License-Identifier: UNLICENSED 

pragma solidity ^0.8.0;

contract Transactions {
    // type -> variable
    uint256 transactionCount;

    // event
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    // structure property like an object
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // array of objects -> variable
    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        //whenever you call function in blockchain, you you get msg object immediately and would be stored in blockchain and can be accessed
        //block is when specific block is executed in blockchain, and you can access it when the block is executed
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    //view function => do not change any current state on blockchain
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256){
        return transactionCount;
    }

}