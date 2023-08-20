import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../models";
import {
  NftGenerationItemInfoClientModel,
  INftGenerationItemInfoClientModel,
} from "../models";

export interface IGetNftGenerationItemsInfoResponseDto extends IBaseModel {
  itemsInfo: Array<INftGenerationItemInfoClientModel>;
}

@JsonObject()
export class GetNftGenerationItemsInfoResponseDto
  extends BaseModel
  implements IGetNftGenerationItemsInfoResponseDto
{
  @JsonProperty()
  itemsInfo: NftGenerationItemInfoClientModel[];
}
