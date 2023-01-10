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
}
