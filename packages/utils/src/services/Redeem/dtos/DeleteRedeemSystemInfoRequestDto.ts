import { IBaseModel, RequestDto } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";

export interface IDeleteRedeemSystemInfoRequestDto extends IBaseModel {
  id: string;
}

@JsonObject()
export class DeleteRedeemSystemInfoRequestDto
  extends RequestDto
  implements IDeleteRedeemSystemInfoRequestDto
{
  @JsonProperty()
  id: string;
}
