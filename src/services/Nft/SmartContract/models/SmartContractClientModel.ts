import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../../shared";

export enum SmartContractType {
  GENERIC = "GENERIC",
  ERC721 = "ERC721",
  ERC1155 = "ERC1155",
  MINTEEBLE_ERC721 = "MINTEEBLE_ERC721",
  MINTEEBLE_ERC1155 = "MINTEEBLE_ERC1155",
  MINTEEBLE_GADGETS = "MINTEEBLE_GADGETS",
  MINTEEBLE_DYNAMIC_COLLECTION = "MINTEEBLE_DINAMIC_COLLECTION",
  ERC20 = "ERC20",
}

/**
 * Interface model for SmartContract
 */
export interface ISmartContractClientModel extends IBaseModel {
  /**
   * Smart contract ID
   */
  id: string;

  /**
   * Network chain name
   */
  chainName: string;

  /**
   * Smart contract address
   */
  address: string;

  /**
   * Resource owner
   */
  owner: string;

  /**
   * Smart contract type
   */
  type: SmartContractType;

  /**
   * Smart contract custom ABI
   */
  abi: any;
}

/**
 * Interface model for SmartContract
 */
@JsonObject()
export class SmartContractClientModel
  extends BaseModel
  implements ISmartContractClientModel
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  chainName: string;

  @JsonProperty()
  address: string;

  @JsonProperty()
  owner: string;

  @JsonProperty()
  type: SmartContractType;

  @JsonProperty()
  abi: any;

  constructor() {
    super();
    this.type = SmartContractType.GENERIC;
  }
}
