import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  ISingleOwnableClientModel,
  SingleOwnableClientModel,
} from "./SingleOwnableClientModel";

/**
 * Nft collection type
 */
export enum CollectionType {
  ERC721 = "ERC721",
  ERC1155 = "ERC1155",
  MINTEEBLE_ERC721 = "MINTEEBLE_ERC721",
  MINTEEBLE_ERC1155 = "MINTEEBLE_ERC1155",
  MINTEEBLE_GADGETS = "MINTEEBLE_GADGETS",
  MINTEEBLE_DYNAMIC_COLLECTION = "MINTEEBLE_DYNAMIC_COLLECTION",
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
   * Id assigned to the smart contract
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
  generationId?: string;

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
  generationId?: string;

  @JsonProperty()
  resourceOwner: string;
}
