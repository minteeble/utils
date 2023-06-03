import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IDeleteReservedAreaRequestDto extends IBaseModel {
  urlName: string;
}

@JsonObject()
export class DeleteReservedAreaRequestDto
  extends RequestDto
  implements IDeleteReservedAreaRequestDto
{
  @JsonProperty()
  urlName: string;
}
