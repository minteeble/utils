import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  IRequirementItemClientModel,
  RequirementItemClientModel,
} from "./RequirementItemClientModel";

export enum LogicOperators {
  AND = "AND",
  OR = "OR",
  XOR = "XOR",
}

export interface IRequirementGroupClientModel
  extends IRequirementItemClientModel {
  requirements: Array<RequirementItemClientModel>;

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
