import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";

export interface IUpdateAppRequestDto extends IBaseModel {
  displayName: string;

  newDisplayName: string;
}

@JsonObject()
export class UpdateAppRequestDto
  extends RequestDto
  implements IUpdateAppRequestDto
{
  @JsonProperty()
  displayName: string;

  @JsonProperty()
  newDisplayName: string;
}
