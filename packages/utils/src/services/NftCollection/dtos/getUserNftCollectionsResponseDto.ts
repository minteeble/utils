import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  BaseModel,
  IBaseModel,
  INftCollectionInfoClientModel,
  NftCollectionInfoClientModel,
} from "../../../models";

export interface IGetUserNftCollectionsResponseDto extends IBaseModel {
  collections: Array<INftCollectionInfoClientModel>;
}

@JsonObject()
export class GetUserNftCollectionsResponseDto
  extends BaseModel
  implements IGetUserNftCollectionsResponseDto
{
  @JsonProperty({ type: NftCollectionInfoClientModel })
  collections: Array<NftCollectionInfoClientModel>;
}
