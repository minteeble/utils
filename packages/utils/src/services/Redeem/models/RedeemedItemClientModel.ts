import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

/**
 * Item that has been redeemed
 */
export interface IRedeemedItemClientModel extends IBaseModel {
  /**
   * Item's id
   */
  id: string;

  /**
   * Wallet address of the redeemer user
   */
  redeemerAddress: string;

  /**
   * Redeemer's shipping info
   */
  shippingInfo: any;

  /**
   * Redeemer's contact info
   */
  contactInfo: any;

  /**
   * Redeem config ID
   */
  redeemConfigId: string;
}

@JsonObject()
export class RedeemedItemClientModel
  extends BaseModel
  implements IRedeemedItemClientModel
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  redeemerAddress: string;

  @JsonProperty()
  shippingInfo: any;

  @JsonProperty()
  contactInfo: any;

  @JsonProperty()
  redeemConfigId: string;
}
