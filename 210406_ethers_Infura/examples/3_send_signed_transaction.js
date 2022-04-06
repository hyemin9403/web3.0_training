const { ethers } = require("ethers");
require("dotenv").config();

const INFURA_ID = process.env.INFURA_ID;
const provider = new ethers.providers.JsonRpcProvider(
  `https://ropsten.infura.io/v3/${INFURA_ID}`
);

const account1 = process.env.ACCOUNT_ONE; // sender
const account2 = process.env.ACCOUNT_TWO; // receipient

const privateKey1 = process.env.ACCOUNT_ONE_PRIVATE_KEY; // Sender private key
const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {
  // Show account 1 balance before transfer
  const senderBalanceBefore = await provider.getBalance(account1);
  // Show account 2 balance before transfer
  const recieverBalanceBefore = await provider.getBalance(account2);

  console.log(
    `\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`
  );
  console.log(
    `reciever balance before: ${ethers.utils.formatEther(
      recieverBalanceBefore
    )}\n`
  );

  // Send Ether
  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.utils.parseEther("0.025"),
  });

  // Wait for Transactions to be mined
  await tx.wait();
  // Fetch Transaction
  console.log(tx);

  // Show account 1 balance after transfer
  const senderBalanceAfter = await provider.getBalance(account1);
  // Show account 2 balance after transfer
  const recieverBalanceAfter = await provider.getBalance(account2);

  console.log(
    `\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`
  );
  console.log(
    `reciever balance after: ${ethers.utils.formatEther(
      recieverBalanceAfter
    )}\n`
  );
};

main();
