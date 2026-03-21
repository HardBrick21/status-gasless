# Status Network Gasless Demo

> Deploy and transact on Status Network with zero gas fees

## Overview

Status Network is an Ethereum L2 with **protocol-level zero gas** - gas is literally set to 0, not sponsored. This demo shows an AI agent deploying a contract and executing transactions with no gas costs.

## Why Status Network?

- **Truly Gasless** - Gas = 0 at protocol level
- **Ethereum Compatible** - Use existing tools (Hardhat, ethers.js)
- **Privacy-First** - Built by Status team

## Deployed Contract

| Contract | Address | Network |
|----------|---------|---------|
| SimpleStorage | TBD | Status Network Sepolia |

## Chain Info

- **Chain ID:** 1660990954
- **RPC:** https://rpc.status.network
- **Explorer:** https://explorer.status.network

## Quick Start

```bash
# Install dependencies
npm install

# Compile
npx hardhat compile

# Deploy (gasless!)
npx hardhat run scripts/deploy.js --network status-testnet
```

## Demo Script

```javascript
// Deploy contract - gas = 0
const SimpleStorage = await ethers.deployContract("SimpleStorage");
await SimpleStorage.waitForDeployment();

// Store value - gas = 0
await SimpleStorage.store(42);

// Read value - gas = 0
const value = await SimpleStorage.retrieve();
console.log("Stored value:", value);
```

## Requirements for Track

- ✅ Deploy a smart contract
- ✅ Execute at least one gasless transaction
- ✅ Provide tx hash proof
- ✅ AI agent component

---

*Zero gas. Zero fees. Zero friction.*