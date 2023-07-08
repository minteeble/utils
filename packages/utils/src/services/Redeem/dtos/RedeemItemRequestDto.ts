import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { ContactInformation, ShippingInformation } from "../models";

export interface IRedeemItemRequestDto extends IBaseModel {
  nftId: string;

  shippingInfo: ShippingInformation;

  contactInfo: ContactInformation;

  redeemSystemId: string;

  productId: string;

  variationName: string;
}

@JsonObject()
export class RedeemItemRequestDto
  extends RequestDto
  implements IRedeemItemRequestDto
{
  @JsonProperty()
  nftId: string;

  @JsonProperty()
  shippingInfo: ShippingInformation;

  @JsonProperty()
  contactInfo: ContactInformation;

  @JsonProperty()
  redeemSystemId: string;

  @JsonProperty()
  productId: string;

  @JsonProperty()
  variationName: string;
}
