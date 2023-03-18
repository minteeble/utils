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
   * Id assigned to the smart comtract
   */
  smartContractId: string;

  /**
   * Description
   */
  description: string;

  /**
   * Collection logo image
   */
  logo: string;

  /**
   * Collection type
   */
  type: string;

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
  smartContractId: string;

  @JsonProperty()
  description: string;

  @JsonProperty()
  logo: string;

  @JsonProperty()
  type: string;

  @JsonProperty()
  resourceOwner: string;
}
