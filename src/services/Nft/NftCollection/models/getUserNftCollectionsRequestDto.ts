import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../shared";

export interface IGetUserNftCollectionsInfoRequestDto extends IBaseModel {
  chainName: string;

  user: string;
}

@JsonObject()
export class GetUserNftCollectionsInfoRequestDto
  extends BaseModel
  implements IGetUserNftCollectionsInfoRequestDto
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  user: string;
}
