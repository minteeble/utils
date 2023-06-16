import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetRedeemSystemInfoRequestDto extends IBaseModel {
  id: string;
}

@JsonObject()
export class GetRedeemSystemInfoRequestDto
  extends RequestDto
  implements IGetRedeemSystemInfoRequestDto
{
  @JsonProperty()
  id: string;
}
