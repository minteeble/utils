import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { ContactInformation, ShippingInformation } from "../models";

export interface IGetRedeemableResponseDto extends IBaseModel {
  id: string;
  redeemerAddress: string;
  shippingInfo: ShippingInformation | null;
  contactInfo: ContactInformation | null;
  redeemConfigId: string;
  redeemed: boolean;
}

@JsonObject()
export class GetRedeemableResponseDto
  extends BaseModel
  implements IGetRedeemableResponseDto
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  redeemerAddress: string;

  @JsonProperty()
  shippingInfo: ShippingInformation | null;

  @JsonProperty()
  contactInfo: ContactInformation | null;

  @JsonProperty()
  redeemConfigId: string;

  @JsonProperty()
  redeemed: boolean;
}
