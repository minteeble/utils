import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

/**
 * Redeem type (Burn type: Burn an NFT to redeem the item; Default type: backend redeeming).
 */
export enum RedeemType {
  BURN = "burn",
  DEFAULT = "default",
}

/**
 * Redeem configurations, has to be assigned by an item which will take these configs.
 */
export interface IRedeemConfigClientModel extends IBaseModel {
  /**
   * RedeemConfig's id
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
export class RedeemConfigClientModel
  extends BaseModel
  implements IRedeemConfigClientModel
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
