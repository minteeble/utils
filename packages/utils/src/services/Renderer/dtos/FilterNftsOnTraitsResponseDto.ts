import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IFilterNftsOnTraitsResponseDto extends IBaseModel {
  nftIds: number[];
}

@JsonObject()
export class FilterNftsOnTraitsResponseDto
  extends BaseModel
  implements IFilterNftsOnTraitsResponseDto
{
  @JsonProperty()
  nftIds: number[];
}
