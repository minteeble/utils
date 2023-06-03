import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetReservedAreaRequestDto extends IBaseModel {
  urlName: string;
}

@JsonObject()
export class GetReservedAreaRequestDto
  extends RequestDto
  implements IGetReservedAreaRequestDto
{
  @JsonProperty()
  urlName: string;
}
