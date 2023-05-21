import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  BaseModel,
  IBaseModel,
  INftCollectionInfoPreview,
  NftCollectionInfoPreview,
} from "../../../models";
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
