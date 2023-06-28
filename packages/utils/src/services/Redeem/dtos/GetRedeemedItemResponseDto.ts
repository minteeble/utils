import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { ContactInformation, ShippingInformation } from "../models";

export interface IGetRedeemedItemResponseDto extends IBaseModel {
  id: string;
  redeemerAddress: string | null;
  shippingInfo: ShippingInformation | null;
  contactInfo: ContactInformation | null;
  redeemSystemId: string;
}

@JsonObject()
export class GetRedeemedItemResponseDto
  extends BaseModel
  implements IGetRedeemedItemResponseDto
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
}
