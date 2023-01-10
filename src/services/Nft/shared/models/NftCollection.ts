import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  BaseModel,
  IBaseModel,
  ISingleOwnableClientModel,
  SingleOwnableClientModel,
} from "../../../../shared";

export interface INftCollectionInfoClientModel
  extends ISingleOwnableClientModel {
  /**
   * Chain name such as rinkeby, mainnet, etc
   */
  chainName: string;

  /**
   * Name assigned to the collection
   */
  collectionName: string;

  /**
   * ID assigned to the collection
   */
  collectionId: string;

  /**
   * Collection address
   */
  address: string;

  /**
   * Collection type
   */
  type: string;

  /**
   * Collection ABI info
   */
  ABI: any;

  /**
   * Resource Owner
   */
  resourceOwner: string;
}

@JsonObject()
export class NftCollectionInfoClientModel
  extends SingleOwnableClientModel
  implements INftCollectionInfoClientModel
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionName: string;

  @JsonProperty()
  collectionId: string;

  @JsonProperty()
  address: string;

  @JsonProperty()
  type: string;

  @JsonProperty()
  ABI: any;

  @JsonProperty()
  resourceOwner: string;
}
