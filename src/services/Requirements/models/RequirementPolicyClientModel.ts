import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../shared";
import { RequirementItemClientModel } from "./RequirementItemClientModel";

export interface IRequirementPolicyClientModel extends IBaseModel {
  name: string;
  id: string;
  requirement: RequirementItemClientModel;
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
}
