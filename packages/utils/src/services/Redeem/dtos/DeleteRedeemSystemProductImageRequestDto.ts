import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IDeleteRedeemSystemProductImageRequestDto extends IBaseModel {
  redeemSystemId: string;

  productId: string;

  imageIndex: string;
}

@JsonObject()
export class DeleteRedeemSystemProductImageRequestDto
  extends RequestDto
  implements IDeleteRedeemSystemProductImageRequestDto
{
  @JsonProperty({ required: true })
  redeemSystemId: string;

  @JsonProperty({ required: true })
  productId: string;

  @JsonProperty({ required: true })
  imageIndex: string;
}
