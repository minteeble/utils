import { BaseModel, IBaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { UserPreviewClientModel } from "../models";

export interface IGetUserProfilesResponseDto extends IBaseModel {
  users: Array<UserPreviewClientModel>;
  paginationToken?: string;
}

@JsonObject()
export class GetUserProfilesResponseDto
  extends BaseModel
  implements IGetUserProfilesResponseDto
{
  @JsonProperty()
  users: UserPreviewClientModel[];

  @JsonProperty()
  paginationToken?: string;
}
