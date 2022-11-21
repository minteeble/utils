import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel, RequestDto } from "../../../../shared";

export interface IGetChainNftCollectionsRequestDto extends IBaseModel {
  chainName: string;
}

@JsonObject()
export class GetChainNftCollectionsRequestDto
  extends RequestDto
  implements IGetChainNftCollectionsRequestDto
{
  @JsonProperty()
  chainName: string;
}
