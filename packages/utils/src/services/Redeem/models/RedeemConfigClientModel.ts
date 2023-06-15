import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

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
   * Type of redeem (such as burn to redeem or default redeem)
   */
  redeemType: string;

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
  redeemType: string;

  @JsonProperty()
  resourceOwner: string;
}
