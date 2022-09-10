import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../../shared";

export interface IGetChainNftCollectionsRequestDto extends IBaseModel {
  chainName: string;
}

@JsonObject()
export class GetChainNftCollectionsRequestDto
  extends BaseModel
  implements IGetChainNftCollectionsRequestDto
{
  @JsonProperty()
  chainName: string;
}
