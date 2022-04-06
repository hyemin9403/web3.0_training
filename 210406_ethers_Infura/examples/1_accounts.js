// Importing(Node.js)
const { ethers } = require("ethers");
require("dotenv").config();

const INFURA_ID = process.env.INFURA_ID;
// provider = 블록체인 네트워크와 통신을 대신 하는 일종의 서버처럼 작동하며, 사용자에게 api를 제공해서 dapp 개발을 쉽게 도와주는 역할
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);
const address = "0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e"; // ETH 많이 가진 사람

const main = async () => {
  const balance = await provider.getBalance(address);
  console.log(
    `\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`
  );
};

main();
