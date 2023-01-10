import { INetworkModel } from "./models";

let networks: Array<INetworkModel> = [
  {
    chainId: 1,
    name: "Ethereum Mainnet",
    currency: "ETH",
    urlName: "Mainnet",
    isTestnet: false,
  },
  {
    chainId: 5,
    name: "Goerli",
    currency: "ETH",
    urlName: "goerli",
    isTestnet: true,
  },
  {
    chainId: 56,
    name: "Binance Smart Chain Mainnet",
    currency: "BNB",
    urlName: "goerli",
    isTestnet: false,
  },
  {
    chainId: 97,
    name: "Binance Smart Chain Testnet",
    currency: "tBNB",
    urlName: "goerli",
    isTestnet: true,
  },
];

export default networks;
