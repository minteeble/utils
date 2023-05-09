import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";

export interface IJoinReservedAreaRequestDto extends IBaseModel {
  urlName: string;
}

@JsonObject()
export class JoinReservedAreaRequestDto
  extends RequestDto
  implements IJoinReservedAreaRequestDto
{
  @JsonProperty()
  urlName: string;
}
