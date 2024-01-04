import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { RoleType } from "../models";

export interface IGetNavigationGroupResponseDto extends IBaseModel {
  groupName: string;

  role: RoleType;

  sections: string[];
}

@JsonObject()
export class GetNavigationGroupResponseDto
  extends BaseModel
  implements IGetNavigationGroupResponseDto
{
  @JsonProperty()
  groupName: string;

  @JsonProperty()
  role: RoleType;

  @JsonProperty()
  sections: string[];
}
