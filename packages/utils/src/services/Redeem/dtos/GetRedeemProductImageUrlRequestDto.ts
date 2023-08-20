import { JsonProperty, JsonObject } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetRedeemProductImageUrl extends IBaseModel {
  redeemSystemId: string;
  productId: string;
}

@JsonObject()
export class GetRedeemProductImageUrl
  extends RequestDto
  implements IGetRedeemProductImageUrl
{
  @JsonProperty()
  redeemSystemId: string;

  @JsonProperty()
  productId: string;
}
