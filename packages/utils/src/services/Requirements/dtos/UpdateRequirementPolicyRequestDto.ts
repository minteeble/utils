import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";
import { RequirementItemClientModel } from "../models";

export interface IUpdateRequirementPolicyRequestDto extends IBaseModel {
  id: string;

  name: string;

  requirement: RequirementItemClientModel;
}

@JsonObject()
export class UpdateRequirementPolicyRequestDto
  extends RequestDto
  implements IUpdateRequirementPolicyRequestDto
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  name: string;

  @JsonProperty()
  requirement: RequirementItemClientModel;
}
