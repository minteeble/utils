import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../shared";
import { RequirementItemClientModel } from "../models";

export interface IGetRequirementPolicyResponseDto extends IBaseModel {
  name: string;

  requirement: RequirementItemClientModel;
}

@JsonObject()
export class GetRequirementPolicyResponseDto
  extends BaseModel
  implements IGetRequirementPolicyResponseDto
{
  @JsonProperty()
  name: string;

  @JsonProperty()
  requirement: RequirementItemClientModel;
}
