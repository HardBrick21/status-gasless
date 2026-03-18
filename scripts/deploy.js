const hre = require("hardhat");

async function main() {
  console.log("Deploying to Status Network Sepolia (Chain ID: 1660990954)");
  console.log("Gas price: 0 (protocol-level gasless!)\n");

  const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
  
  console.log("Deploying SimpleStorage...");
  const storage = await SimpleStorage.deploy();
  await storage.waitForDeployment();
  
  const address = await storage.getAddress();
  console.log(`✅ SimpleStorage deployed to: ${address}`);
  
  // Store a value (gasless transaction)
  console.log("\nStoring value 42...");
  const tx = await storage.store(42);
  await tx.wait();
  console.log(`✅ Value stored! Tx hash: ${tx.hash}`);
  
  // Read the value
  const value = await storage.retrieve();
  console.log(`✅ Retrieved value: ${value}`);
  
  console.log("\n--- Deployment Summary ---");
  console.log(`Contract: ${address}`);
  console.log(`Deploy Tx: ${storage.deploymentTransaction().hash}`);
  console.log(`Store Tx: ${tx.hash}`);
  console.log(`Network: Status Network Sepolia`);
  console.log(`Gas Used: 0 (gasless!)`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});