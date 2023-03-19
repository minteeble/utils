import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../shared";
import {
  INftCollectionInfoClientModel,
  NftCollectionInfoClientModel,
} from "../../shared";
import {
  INftCollectionInfoPreview,
  NftCollectionInfoPreview,
} from "../../shared/models/NftCollectionPreview";

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
