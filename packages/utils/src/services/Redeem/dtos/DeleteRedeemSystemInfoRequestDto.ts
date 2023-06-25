import { IBaseModel, RequestDto } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";

export interface IDeleteRedeemSystemInfoRequestDto extends IBaseModel {
  systemId: string;
}

@JsonObject()
export class DeleteRedeemSystemInfoRequestDto
  extends RequestDto
  implements IDeleteRedeemSystemInfoRequestDto
{
  @JsonProperty()
  systemId: string;
}
