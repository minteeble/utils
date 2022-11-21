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
  abi: any;
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
  address: string;

  @JsonProperty()
  type: string;

  @JsonProperty()
  abi: any;
}
