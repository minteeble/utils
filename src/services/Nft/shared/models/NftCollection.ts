import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../shared";

export interface INftCollectionInfoClientModel extends IBaseModel {
  /**
   * Chain name such as rinkeby, mainnet, etc
   */
  chainName: string;

  /**
   * Name assigned to the collection
   */
  collectionName: string;

  /**
   * Collection address
   */
  address: string;

  /**
   * Collection type
   */
  type: string;
}

@JsonObject()
export class NftCollectionInfoClientModel
  extends BaseModel
  implements INftCollectionInfoClientModel
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionName: string;

  @JsonProperty()
  address: string;

  @JsonProperty()
  type: string;
}
