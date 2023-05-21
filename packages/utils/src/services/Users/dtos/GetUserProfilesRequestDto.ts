import { IBaseModel, RequestDto } from "../../../models";
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
