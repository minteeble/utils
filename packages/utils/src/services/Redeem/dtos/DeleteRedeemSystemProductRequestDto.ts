import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IDeleteRedeemSystemProductRequestDto extends IBaseModel {
  redeemSystemId: string;

  productId: string;
}

@JsonObject()
export class DeleteRedeemSystemProductRequestDto
  extends RequestDto
  implements IDeleteRedeemSystemProductRequestDto
{
  @JsonProperty({ required: true })
  redeemSystemId: string;

  @JsonProperty({ required: true })
  productId: string;
}
