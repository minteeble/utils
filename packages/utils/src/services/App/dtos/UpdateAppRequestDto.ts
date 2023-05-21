import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IUpdateAppRequestDto extends IBaseModel {
  urlName: string;
  displayName: string;
}

@JsonObject()
export class UpdateAppRequestDto
  extends RequestDto
  implements IUpdateAppRequestDto
{
  @JsonProperty()
  urlName: string;

  @JsonProperty()
  displayName: string;
}
