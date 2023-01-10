import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../models/BaseModel";

/**
 * Network model interface
 */
export interface INetworkModel extends IBaseModel {
  /**
   * Chain ID
   */
  chainId: number;

  /**
   * Network full name
   */
  name: string;

  /**
   * Currency name (eg. ETH, MATIC, BNB, etc.)
   */
  currency: string;

  /**
   * NEtwork url name, so without spaces or other non-standard char
   */
  urlName: string;

  /**
   * Specifies if the network is testnet or not
   */
  isTestnet: boolean;
}

/**
 * Network model class
 */
@JsonObject()
export class NetworkModel extends BaseModel implements INetworkModel {
  @JsonProperty()
  chainId: number;

  @JsonProperty()
  name: string;

  @JsonProperty()
  currency: string;

  @JsonProperty()
  urlName: string;

  @JsonProperty()
  isTestnet: boolean;

  constructor() {
    super();
    this.isTestnet = false;
  }
}
