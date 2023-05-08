import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../shared";

/**
 * All possibile requirement types
 */
export enum RequirementType {
  DEFAULT = "DEFAULT",
  GROUP = "GROUP",
  TOKEN_OWNERSHIP = "TOKEN_OWNERSHIP",
  ERC721_OWNERSHIP = "ERC721_OWNERSHIP",
  ERC1155_OWNERSHIP = "ERC1155_OWNERSHIP",
  ERC20_OWNERSHIP = "ERC20_OWNERSHIP",
}

/**
 * Requirement Client Model
 */
export interface IRequirementItemClientModel extends IBaseModel {
  /**
   * Type of Requirement Client Model
   */
  type: RequirementType;
}

@JsonObject()
export class RequirementItemClientModel
  extends BaseModel
  implements IRequirementItemClientModel
{
  @JsonProperty()
  type: RequirementType;
}
