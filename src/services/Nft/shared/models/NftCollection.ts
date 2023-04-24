import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  BaseModel,
  IBaseModel,
  ISingleOwnableClientModel,
  SingleOwnableClientModel,
} from "../../../../shared";

/**
 * Nft collection type
 */
export enum CollectionType {
  ERC721 = "ERC721",
  ERC1155 = "ERC1155",
  MINTEEBLE_ERC721 = "MINTEEBLE_ERC721",
  MINTEEBLE_ERC1155 = "MINTEEBLE_ERC1155",
}

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
   * NFT Generation ID
   */
  generationId: string;

  /**
   * NFT Renderer ID
   */
  rendererId: string;

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
  generationId: string;

  @JsonProperty()
  rendererId: string;

  @JsonProperty()
  resourceOwner: string;
}
