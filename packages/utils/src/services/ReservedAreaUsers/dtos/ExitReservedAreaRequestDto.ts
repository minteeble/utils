import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IExitReservedAreaRequestDto extends IBaseModel {
  urlName: string;
}

@JsonObject()
export class ExitReservedAreaRequestDto
  extends RequestDto
  implements IExitReservedAreaRequestDto
{
  @JsonProperty()
  urlName: string;
}
