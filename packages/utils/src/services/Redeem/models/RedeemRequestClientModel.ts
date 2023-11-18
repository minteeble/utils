import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  IRedeemProductClientModel,
  RedeemProductClientModel,
} from "./RedeemProductClientModel";

/**
 * Defines all necessary user shipping information
 */
@JsonObject()
export class ShippingInformation {
  /**
   * Recipient's name
   */
  @JsonProperty()
  name: string;

  /**
   * Recipient's surname
   */
  @JsonProperty()
  surname: string;

  /**
   * Special delivery instructions
   */
  @JsonProperty()
  deliveryInstructions?: string;

  /**
   * Recipient's address
   */
  @JsonProperty()
  address: string;

  /**
   * Street number
   */
  @JsonProperty()
  streetNumber: string;

  /**
   * City name
   */
  @JsonProperty()
  city: string;

  /**
   * country name
   */
  @JsonProperty()
  country: string;

  /**
   * Zip postal code
   */
  @JsonProperty()
  zipCode: string;
}

/**
 * User contact's information
 */
@JsonObject()
export class ContactInformation {
  /**
   * Email address
   */
  @JsonProperty()
  email: string;

  /**
   * Telephone number
   */
  @JsonProperty()
  telephoneNumber: string;
}

/**
 * Redeem request client model
 */
export interface IRedeemRequestClientModel extends IBaseModel {
  /**
   * Item NFT ID
   */
  nftId: number;

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
  redeemSystemId: string;

  /**
   * Product selected during item redemption
   */
  product: IRedeemProductClientModel;

  /**
   * Selected product variation name
   */
  variationName: string;
}

/**
 * Redeem request client model
 */
@JsonObject()
export class RedeemRequestClientModel
  extends BaseModel
  implements IRedeemRequestClientModel
{
  @JsonProperty()
  nftId: number;

  @JsonProperty()
  redeemerAddress: string | null;

  @JsonProperty()
  shippingInfo: ShippingInformation | null;

  @JsonProperty()
  contactInfo: ContactInformation | null;

  @JsonProperty()
  redeemSystemId: string;

  @JsonProperty()
  product: IRedeemProductClientModel;

  @JsonProperty()
  variationName: string;
}
