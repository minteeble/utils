import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { ContactInformation, ShippingInformation } from "../models";

export interface IRedeemItemRequestDto extends IBaseModel {
  id: string;

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
  id: string;

  @JsonProperty()
  shippingInfo: ShippingInformation;

  @JsonProperty()
  contactInfo: ContactInformation;

  @JsonProperty()
  redeemConfigId: string;
}
