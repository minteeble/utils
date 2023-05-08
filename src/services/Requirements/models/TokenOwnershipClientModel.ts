import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  IRequirementItemClientModel,
  RequirementItemClientModel,
} from "./RequirementItemClientModel";

/**
 * Token Ownership Client Model
 */
export interface ITokenOwnershipClientModel
  extends IRequirementItemClientModel {
  /**
   * Network's name
   */
  chainName: string;

  /**
   * Address of the token
   */
  address: string;

  /**
   * Minimum amount
   */
  amount: string;
}

@JsonObject()
export class TokenOwnershipClientModel
  extends RequirementItemClientModel
  implements ITokenOwnershipClientModel
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  address: string;

  @JsonProperty()
  amount: string;
}
