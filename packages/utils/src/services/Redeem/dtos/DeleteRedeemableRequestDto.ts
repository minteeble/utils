import { IBaseModel, RequestDto } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";

export interface IDeleteRedeemableRequestDto extends IBaseModel {
  id: string;
  redeemSystemId: string;
}

@JsonObject()
export class DeleteRedeemableRequestDto
  extends RequestDto
  implements IDeleteRedeemableRequestDto
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  redeemSystemId: string;
}
