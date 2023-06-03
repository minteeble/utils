import { NetworkModel } from "./models";

import networks from "./commonNetworks";

/**
 * Network Utils class
 */
export class NetworkUtils {
  /**
   * Gets the list of networks
   *
   * @returns The list of available networks
   */
  public static getAllNetworks(): Array<NetworkModel> {
    return networks;
  }

  /**
   * Gets the list of testnet networks
   *
   * @returns The list of testnet networks
   */
  public static getTestnetNetworks(): Array<NetworkModel> {
    return this.getAllNetworks().filter((network) => network.isTestnet) || [];
  }

  /**
   * Gets the list of testnet networks
   *
   * @returns The list of mainnet networks
   */
  public static getMainnetNetworks(): Array<NetworkModel> {
    return this.getAllNetworks().filter((network) => !network.isTestnet);
  }

  /**
   * Gets network object by specifying its urlName
   *
   * @param urlName Network url name
   * @returns Network model if exists, null otherwise
   */
  public static getNetworkByUrlname(urlName: string): NetworkModel | null {
    return (
      this.getAllNetworks().find((network) => network.urlName === urlName) ||
      null
    );
  }

  /**
   * Gets network object by specifying its chainId
   *
   * @param chainId Newtork chain ID
   * @returns Network model if exists, null otherwise
   */
  public static getNetworkByChainId(chainId: number): NetworkModel | null {
    return (
      this.getAllNetworks().find((network) => network.chainId === chainId) ||
      null
    );
  }

  /**
   * Builds the block explorer url for the specified address
   *
   * @param urlName Network url name (Chain name)
   * @param address Address of the account
   * @returns Blockexplorer url
   */
  public static getAddressUrl(urlName: string, address: string): string {
    let network = this.getNetworkByUrlname(urlName);
    let finalUrl: string = "";

    if (network) {
      finalUrl = network.explorerUrlPattern.replace("{address}", address);
    }

    return finalUrl;
  }
}
