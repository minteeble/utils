import { IBaseModel, RequestDto } from "../../../shared";
import { JsonProperty, JsonObject } from "typescript-json-serializer";

export interface IUpdateUserProfileRequestDto extends IBaseModel {
  userName: string;
}

@JsonObject()
export class UpdateUserProfileRequestDto
  extends RequestDto
  implements IUpdateUserProfileRequestDto
{
  @JsonProperty()
  userName: string;
}
