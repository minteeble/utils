import { IBaseModel, RequestDto } from "../../../shared";
import { JsonProperty, JsonObject } from "typescript-json-serializer";

export interface ICreateUserProfileRequestDto extends IBaseModel {
  userName: string;
}

@JsonObject()
export class CreateUserProfileRequestDto
  extends RequestDto
  implements ICreateUserProfileRequestDto
{
  @JsonProperty()
  userName: string;
}
