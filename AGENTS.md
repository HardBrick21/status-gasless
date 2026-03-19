# AGENTS.md - Status Gasless Demo

## Overview

Status Gasless Demo shows how to deploy and transact on Status Network with protocol-level zero gas - gas is literally set to 0, not sponsored.

## What It Does

- **Truly Gasless**: Gas = 0 at protocol level
- **Deploy Contracts**: No gas cost for deployment
- **Execute Transactions**: No gas cost for any transaction
- **Perfect for Micro-transactions**: Enable $0.01 transactions

## How to Interact

### Smart Contract Interface

**SimpleStorage** (deploy on Status Network)

```solidity
// Store a value (gasless!)
function store(uint256 newValue) external;

// Retrieve stored value
function retrieve() external view returns (uint256);

// Register an agent
function registerAgent(address _agent) external;

// Check owner
function owner() external view returns (address);
function agent() external view returns (address);
```

### Network Information

| Parameter | Value |
|-----------|-------|
| Chain ID | 1660990954 |
| RPC | https://rpc.status.network |
| Explorer | https://explorer.status.network |
| Gas Price | 0 (protocol-level) |

### Deploy Gasless Contract

```javascript
const hre = require("hardhat");

// Deploy with gas = 0
const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
const storage = await SimpleStorage.deploy();
await storage.waitForDeployment();

console.log("Deployed to:", await storage.getAddress());
// Gas used: 0!
```

### Execute Gasless Transaction

```javascript
// Store value - gas = 0
const tx = await storage.store(42);
await tx.wait();

console.log("Transaction hash:", tx.hash);
// Gas used: 0!
```

## Integration Guide

### Hardhat Configuration

```javascript
module.exports = {
  solidity: "0.8.20",
  networks: {
    "status-testnet": {
      url: "https://rpc.status.network",
      chainId: 1660990954,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
```

### Deploy Script

```javascript
const hre = require("hardhat");

async function main() {
  const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
  const storage = await SimpleStorage.deploy();
  await storage.waitForDeployment();
  
  // Store value (gasless!)
  const tx = await storage.store(42);
  await tx.wait();
  
  console.log("Gas used:", tx.gasUsed?.toString() || "0");
}

main();
```

## Requirements for Track

- ✅ Deploy a smart contract
- ✅ Execute at least one gasless transaction
- ✅ Provide tx hash proof
- ✅ AI agent component

## Target Track

**Go Gasless: Deploy & Transact on Status Network** ($50 per qualifying submission)

---

*Status Gasless Demo - Zero gas. Zero fees. Zero friction.*