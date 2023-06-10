import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";
import { UserPreviewClientModel } from "../../Users";

export interface IGetAppAdminsResponseDto extends IBaseModel {
  users: Array<UserPreviewClientModel>;
  paginationToken?: string;
}

@JsonObject()
export class GetAppAdminsResponseDto
  extends BaseModel
  implements IGetAppAdminsResponseDto
{
  @JsonProperty()
  users: UserPreviewClientModel[];

  @JsonProperty()
  paginationToken?: string | undefined;
}
