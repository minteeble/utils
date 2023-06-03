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
    urlName: "polygon",
    isTestnet: false,
    explorerUrlPattern: "https://polygonscan.com/address/{address}",
  },
  {
    chainId: 80001,
    name: "Mumbai",
    currency: "MATIC",
    urlName: "mumbai",
    isTestnet: true,
    explorerUrlPattern: "https://mumbai.polygonscan.com/address/{address}",
  },
];

export default networks;
