import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IUrlCallerRequestDto extends IBaseModel {
  url: string;
}

@JsonObject()
export class UrlCallerRequestDto
  extends RequestDto
  implements IUrlCallerRequestDto
{
  @JsonProperty()
  url: string;
}
