import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";
import { RequirementItemClientModel } from "../models";

export interface ICreateRequirementPolicyRequestDto extends IBaseModel {
  name: string;

  requirement: RequirementItemClientModel;
}

@JsonObject()
export class CreateRequirementPolicyRequestDto
  extends RequestDto
  implements ICreateRequirementPolicyRequestDto
{
  @JsonProperty()
  name: string;

  @JsonProperty()
  requirement: RequirementItemClientModel;
}
