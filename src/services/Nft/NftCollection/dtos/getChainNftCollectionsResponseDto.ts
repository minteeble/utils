import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../shared";
import {
  INftCollectionInfoPreview,
  NftCollectionInfoPreview,
} from "../../shared/models/NftCollectionPreview";

export interface IGetChainNftCollectionsResponseDto extends IBaseModel {
  collections: Array<INftCollectionInfoPreview>;
}

@JsonObject()
export class GetChainNftCollectionsResponseDto
  extends BaseModel
  implements IGetChainNftCollectionsResponseDto
{
  @JsonProperty({ type: NftCollectionInfoPreview })
  collections: Array<NftCollectionInfoPreview>;
}
