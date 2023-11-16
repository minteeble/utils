import { JsonProperty, JsonObject } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetRedeemProductImageUrlRequestDto extends IBaseModel {
  redeemSystemId: string;
  productId: string;
}

@JsonObject()
export class GetRedeemProductImageUrlRequestDto
  extends RequestDto
  implements IGetRedeemProductImageUrlRequestDto
{
  @JsonProperty()
  redeemSystemId: string;

  @JsonProperty()
  productId: string;
}
