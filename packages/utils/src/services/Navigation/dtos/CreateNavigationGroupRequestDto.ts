import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { RoleType } from "../models";

export interface ICreateNavigationGroupRequestDto extends IBaseModel {
  name: string;

  role: RoleType;
}

@JsonObject()
export class CreateNavigationGroupRequestDto
  extends RequestDto
  implements ICreateNavigationGroupRequestDto
{
  @JsonProperty()
  name: string;

  @JsonProperty()
  role: RoleType;
}
