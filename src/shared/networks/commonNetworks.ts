import { INetworkModel } from "./models";

let networks: Array<INetworkModel> = [
  {
    chainId: 1,
    name: "Ethereum Mainnet",
    currency: "ETH",
    urlName: "Mainnet",
    isTestnet: false,
    explorerUrlPattern: "https:/etherscan.io/address/{address}",
  },
  {
    chainId: 5,
    name: "Goerli",
    currency: "ETH",
    urlName: "goerli",
    isTestnet: true,
    explorerUrlPattern: "https://goerli.etherscan.io/address/{address}",
  },
  {
    chainId: 56,
    name: "Binance Smart Chain Mainnet",
    currency: "BNB",
    urlName: "bsc",
    isTestnet: false,
    explorerUrlPattern: "https://bscscan.io/address/{address}",
  },
  {
    chainId: 97,
    name: "Binance Smart Chain Testnet",
    currency: "tBNB",
    urlName: "goerli",
    isTestnet: true,
    explorerUrlPattern: "https://testnet.bscscan.io/address/{address}",
  },
];

export default networks;
