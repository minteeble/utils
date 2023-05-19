import { IBaseModel, RequestDto } from "../../../shared";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IGetUserProfilesRequestDto extends IBaseModel {
  paginationToken?: string;
}

@JsonObject()
export class GetUserProfilesRequestDto
  extends RequestDto
  implements IGetUserProfilesRequestDto
{
  @JsonProperty()
  paginationToken?: string | undefined;
}
