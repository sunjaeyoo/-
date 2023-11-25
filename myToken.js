const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const MyToken = await hre.ethers.getContractFactory("MyToken");

  const token = await MyToken.deploy("Yoosunjae", "YSJ");

  await token.deployed();

  console.log(`토큰이 배포된 주소: ${token.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });