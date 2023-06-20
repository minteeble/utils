import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  IRedeemSystemConfigClientModel,
  RedeemSystemConfigClientModel,
} from "./RedeemSystemConfigClientModel";

/**
 * Redeem type (Burn type: Burn an NFT to redeem the item; Default type: backend redeeming).
 */
export enum RedeemType {
  BURN = "burn",
  SERVER_TRACKED = "server_tracked",
}

/**
 * Redeem configurations, has to be assigned by an item which will refer to these configs.
 */
export interface IRedeemSystemInfoClientModel extends IBaseModel {
  /**
   * RedeemSystemInfo's id
   */
  id: string;

  /**
   * Display name
   */
  name: string;

  /**
   * Chain name (such as sepolia, binance etc.)
   */
  chainName: string;

  /**
   * Collection ID
   */
  collectionId: string;

  /**
   * Type of redeem
   */
  redeemType: RedeemType;

  /**
   * Owner's wallet address
   */
  resourceOwner: string;

  /**
   * Redeem System Config
   */
  config: IRedeemSystemConfigClientModel;
}

@JsonObject()
export class RedeemSystemInfoClientModel
  extends BaseModel
  implements IRedeemSystemInfoClientModel
{
  @JsonProperty({ required: true })
  id: string;

  @JsonProperty({ required: true })
  name: string;

  @JsonProperty({ required: true })
  chainName: string;

  @JsonProperty({ required: true })
  collectionId: string;

  @JsonProperty({ required: true })
  redeemType: RedeemType;

  @JsonProperty({ required: true })
  resourceOwner: string;

  @JsonProperty({ required: true })
  config: RedeemSystemConfigClientModel;
}
