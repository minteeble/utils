import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

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
