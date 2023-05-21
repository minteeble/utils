import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface ICreateAppRequestDto extends IBaseModel {
  urlName: string;
  displayName: string;
}

@JsonObject()
export class CreateAppRequestDto
  extends RequestDto
  implements ICreateAppRequestDto
{
  @JsonProperty()
  urlName: string;

  @JsonProperty()
  displayName: string;
}
