import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../models";
import { RequirementItemClientModel } from "./RequirementItemClientModel";

export interface IRequirementPolicyClientModel extends IBaseModel {
  /**
   * Name of the policy
   */
  name: string;

  /**
   * ID of the policy
   */
  id: string;

  /**
   * Requirement of the policy. Can be a group due to inheritance.
   */
  requirement: RequirementItemClientModel;

  /**
   * Owner of the policy
   */
  resourceOwner: string;
}

@JsonObject()
export class RequirementPolicyClientModel
  extends BaseModel
  implements IRequirementPolicyClientModel
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  name: string;

  @JsonProperty()
  requirement: RequirementItemClientModel;

  @JsonProperty()
  resourceOwner: string;
}
