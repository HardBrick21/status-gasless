const { ethers } = require('ethers');

const privateKey = '0xefb80167aff8783cb276c744cd2f4060eb9e848d52766d48034c2cf23917e64d';
const wallet = new ethers.Wallet(privateKey);

console.log('=== 从同一私钥派生多个地址 ===\n');
console.log('主地址 (m/44\'/60\'/0\'/0/0):');
console.log('  Address:', wallet.address);
console.log('  Private Key:', privateKey);

// 派生其他地址
const paths = [
  "m/44'/60'/0'/0/1",
  "m/44'/60'/0'/0/2",
  "m/44'/60'/0'/0/3",
  "m/44'/60'/1'/0/0"
];

console.log('\n派生地址:');
paths.forEach(path => {
  const child = wallet.derivePath(path);
  console.log(`  ${path}:`);
  console.log(`    Address: ${child.address}`);
});
