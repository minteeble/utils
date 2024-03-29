import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface ICreateNftCollectionRequestDto extends IBaseModel {
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
   * Collection description
   */
  description: string;

  /**
   * Collection type
   */
  type: string;

  /**
   * Collection ABI info
   */
  abi?: any;

  /**
   * Resource Owner
   */
  resourceOwner: string;
}

@JsonObject()
export class CreateNftCollectionRequestDto
  extends RequestDto
  implements ICreateNftCollectionRequestDto
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionName: string;

  @JsonProperty()
  address: string;

  @JsonProperty()
  description: string;

  @JsonProperty()
  type: string;

  @JsonProperty()
  abi?: any;

  @JsonProperty()
  resourceOwner: string;
}
