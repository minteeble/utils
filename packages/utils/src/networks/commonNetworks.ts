import { INetworkModel } from "./models";

let networks: Array<INetworkModel> = [
  {
    chainId: 1,
    name: "Ethereum Mainnet",
    currency: "ETH",
    urlName: "mainnet",
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
    urlName: "testbsc",
    isTestnet: true,
    explorerUrlPattern: "https://testnet.bscscan.io/address/{address}",
  },
  {
    chainId: 11155111,
    name: "Sepolia",
    currency: "ETH",
    urlName: "sepolia",
    isTestnet: true,
    explorerUrlPattern: "https://sepolia.etherscan.io/address/{address}",
  },
  {
    chainId: 137,
    name: "Polygon Mainnet",
    currency: "MATIC",
    urlName: "polygon-mainnet",
    isTestnet: false,
    explorerUrlPattern: "https://polygonscan.com/address/{address}",
  },
  {
    chainId: 80001,
    name: "Mumbai",
    currency: "MATIC",
    urlName: "polygon-mumbai",
    isTestnet: true,
    explorerUrlPattern: "https://mumbai.polygonscan.com/address/{address}",
  },
  {
    chainId: 999,
    name: "Zora Testnet",
    urlName: "zora-goerli",
    isTestnet: true,
    explorerUrlPattern:
      "https://testnet.explorer.zora.energy/address/{address}",
    currency: "ETH",
  },
  {
    chainId: 7777777,
    name: "Zora",
    urlName: "zora",
    isTestnet: false,
    explorerUrlPattern: "https://explorer.zora.energy/address/{address}",
    currency: "ETH",
  },
  {
    chainId: 84531,
    name: "Base Goerli",
    urlName: "base-goerli",
    isTestnet: true,
    explorerUrlPattern: "https://goerli.basescan.orgy/address/{address}",
    currency: "ETH",
  },
  {
    chainId: 8453,
    name: "Base",
    urlName: "base",
    isTestnet: false,
    explorerUrlPattern: "https://basescan.org/address/{address}",
    currency: "ETH",
  },
];

export default networks;
