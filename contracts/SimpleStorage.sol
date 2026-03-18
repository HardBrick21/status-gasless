// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title SimpleStorage
 * @notice A simple storage contract for gasless demo on Status Network
 * @dev Gas = 0 at protocol level on Status Network
 */
contract SimpleStorage {
    uint256 private _value;
    address public owner;
    address public agent;
    
    event ValueStored(uint256 newValue, address indexed by);
    event AgentRegistered(address indexed agent);
    
    constructor() {
        owner = msg.sender;
    }
    
    function registerAgent(address _agent) external {
        require(msg.sender == owner, "Only owner");
        agent = _agent;
        emit AgentRegistered(_agent);
    }
    
    function store(uint256 newValue) external {
        require(msg.sender == owner || msg.sender == agent, "Not authorized");
        _value = newValue;
        emit ValueStored(newValue, msg.sender);
    }
    
    function retrieve() external view returns (uint256) {
        return _value;
    }
}