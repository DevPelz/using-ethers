import {ethers} from "ethers";

  const balances = async (address) => {
    const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY");
    const Balance = ethers.utils.formatEther(await provider.getBalance(address));
    const txCount = await provider.getTransactionCount(address);
    const blcknum = await provider.getBlockNumber();

  console.log(`the balance of ${address} is: ${Balance} Eth Mainnet`);
  console.log(`the transaction count of ${address} is: ${txCount} in ETH mainnet`);
  console.log(`the block number of ${address} is: ${blcknum} in ETH mainnet`)
}

balances("YOUR_WALLET_ADDRESS");