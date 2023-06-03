import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel, RequestDto } from "../../../models";

export interface IGetUserNftCollectionsInfoRequestDto extends IBaseModel {
  chainName: string;

  user: string;
}

@JsonObject()
export class GetUserNftCollectionsInfoRequestDto
  extends RequestDto
  implements IGetUserNftCollectionsInfoRequestDto
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  user: string;
}
