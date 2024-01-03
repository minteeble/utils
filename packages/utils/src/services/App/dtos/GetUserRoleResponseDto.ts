import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";
import { AppRole } from "../models";

export interface IGetUserRoleResponseDto extends IBaseModel {
  role: AppRole;
}

@JsonObject()
export class GetUserRoleResponseDto
  extends BaseModel
  implements IGetUserRoleResponseDto
{
  @JsonProperty()
  role: AppRole;
}
