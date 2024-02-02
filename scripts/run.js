const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();

  console.log("Okie,, deployed at : ", await waveContract.getAddress());
  console.log("Deployed by : ", await owner.getAddress());

  await waveContract.getTotalWaves();
  const waveTxn = await waveContract.wave();
  waveTxn.wait();

  const waveTxn_2 = await waveContract.connect(randomPerson).wave();
  waveTxn_2.wait();

  await waveContract.getTotalWaves();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
