import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../shared";
import {
  INftCollectionInfoPreview,
  NftCollectionInfoPreview,
} from "../../shared/models/NftCollectionPreview";

export interface IGetUserNftCollectionsResponseDto extends IBaseModel {
  collections: Array<INftCollectionInfoPreview>;
}

@JsonObject()
export class GetUserNftCollectionsResponseDto
  extends BaseModel
  implements IGetUserNftCollectionsResponseDto
{
  @JsonProperty({ type: NftCollectionInfoPreview })
  collections: Array<NftCollectionInfoPreview>;
}
