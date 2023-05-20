import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../shared";
import { UserPreviewClientModel } from "../../Users";

export interface IGetAppUsersResponseDto extends IBaseModel {
  users: Array<UserPreviewClientModel>;
  paginationToken?: string;
}

@JsonObject()
export class GetAppUsersResponseDto
  extends BaseModel
  implements IGetAppUsersResponseDto
{
  @JsonProperty()
  users: UserPreviewClientModel[];

  @JsonProperty()
  paginationToken?: string | undefined;
}
