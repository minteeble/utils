import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

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
   * Chain name (such as sepolia, binance etc.)
   */
  chainName: string;

  /**
   * Type of redeem
   */
  redeemType: RedeemType;

  /**
   * Owner's wallet address
   */
  resourceOwner: string;
}

@JsonObject()
export class RedeemSystemInfoClientModel
  extends BaseModel
  implements IRedeemSystemInfoClientModel
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  chainName: string;

  @JsonProperty()
  redeemType: RedeemType;

  @JsonProperty()
  resourceOwner: string;
}
