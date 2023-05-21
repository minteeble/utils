import { BaseModel, IBaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IGetUserProfilesResponseDto extends IBaseModel {
  users: Array<string>;
  paginationToken?: string;
}

@JsonObject()
export class GetUserProfilesResponseDto
  extends BaseModel
  implements IGetUserProfilesResponseDto
{
  @JsonProperty()
  users: string[];

  @JsonProperty()
  paginationToken?: string;
}
