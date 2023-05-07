import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  IRequirementItemClientModel,
  RequirementItemClientModel,
} from "./RequirementItemClientModel";

/**
 * Logic Operators which requirements together are validated with
 */
export enum LogicOperators {
  AND = "AND",
  OR = "OR",
  XOR = "XOR",
}

/**
 * Group of requirements client model
 */
export interface IRequirementGroupClientModel
  extends IRequirementItemClientModel {
  /**
   * Array of Requirement Items Client Model
   */
  requirements: Array<RequirementItemClientModel>;

  /**
   * LogicOperators enum validation operator
   */
  logicOperator: LogicOperators;
}

@JsonObject()
export class RequirementGroupClientModel
  extends RequirementItemClientModel
  implements IRequirementGroupClientModel
{
  @JsonProperty()
  logicOperator: LogicOperators;

  @JsonProperty()
  requirements: RequirementItemClientModel[];
}
