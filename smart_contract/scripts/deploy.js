
const main = async () => {

  const addresses = await hre.ethers.getSigners();
  console.log(addresses[0].address, "addresses")

  const transactionsFactory = await hre.ethers.getContractFactory("ION_TEST");
  const transactionsContract = await transactionsFactory.deploy(addresses[0].address);
  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();