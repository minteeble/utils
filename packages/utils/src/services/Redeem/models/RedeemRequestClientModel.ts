import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

/**
 * Defines all necessary user shipping information
 */
@JsonObject()
export class ShippingInformation {
  /**
   * Street name
   */
  @JsonProperty()
  street: string;

  /**
   * City name
   */
  @JsonProperty()
  city: string;

  /**
   * State name
   */
  @JsonProperty()
  state: string;

  /**
   * Zip postal code
   */
  @JsonProperty()
  zipCode: number;
}

/**
 * User contact's information
 */
@JsonObject()
export class ContactInformation {
  /**
   * Email address
   */
  email: string;

  /**
   * Telephone number
   */
  telephoneNumber: string;
}

/**
 * Item that has been redeemed
 */
export interface IRedeemRequestClientModel extends IBaseModel {
  /**
   * Item's id
   */
  id: string;

  /**
   * Wallet address of the redeemer user
   */
  redeemerAddress: string | null;

  /**
   * Redeemer's shipping info
   */
  shippingInfo: ShippingInformation | null;

  /**
   * Redeemer's contact info
   */
  contactInfo: ContactInformation | null;

  /**
   * Redeem config ID
   */
  redeemConfigId: string;

  /**
   * Redeemed status
   */
  redeemed: boolean;
}

@JsonObject()
export class RedeemRequestClientModel
  extends BaseModel
  implements IRedeemRequestClientModel
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

  @JsonProperty()
  redeemed: boolean;
}
