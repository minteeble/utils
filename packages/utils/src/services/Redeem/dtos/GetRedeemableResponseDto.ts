import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { ContactInformation, ShippingInformation } from "../models";

export interface IGetRedeemableResponseDto extends IBaseModel {
  id: string;
  redeemerAddress: string | null;
  shippingInfo: ShippingInformation | null;
  contactInfo: ContactInformation | null;
  redeemSystemId: string;
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
  redeemerAddress: string | null;

  @JsonProperty()
  shippingInfo: ShippingInformation | null;

  @JsonProperty()
  contactInfo: ContactInformation | null;

  @JsonProperty()
  redeemSystemId: string;

  @JsonProperty()
  redeemed: boolean;
}
