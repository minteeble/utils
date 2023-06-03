import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetAppUsersRequestDto extends IBaseModel {
  urlName: string;
  paginationToken?: string | undefined;
  userName: string;
}

@JsonObject()
export class GetAppUsersRequestDto
  extends RequestDto
  implements IGetAppUsersRequestDto
{
  @JsonProperty()
  urlName: string;

  @JsonProperty()
  paginationToken?: string | undefined;

  @JsonProperty()
  userName: string;
}
