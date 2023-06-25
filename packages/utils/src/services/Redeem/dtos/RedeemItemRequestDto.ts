import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { ContactInformation, ShippingInformation } from "../models";

export interface IRedeemItemRequestDto extends IBaseModel {
  nftId: number;

  shippingInfo: ShippingInformation;

  contactInfo: ContactInformation;

  redeemConfigId: string;
}

@JsonObject()
export class RedeemItemRequestDto
  extends RequestDto
  implements IRedeemItemRequestDto
{
  @JsonProperty()
  nftId: number;

  @JsonProperty()
  shippingInfo: ShippingInformation;

  @JsonProperty()
  contactInfo: ContactInformation;

  @JsonProperty()
  redeemConfigId: string;
}
