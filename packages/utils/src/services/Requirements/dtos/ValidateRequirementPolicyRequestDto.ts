import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IValidateRequirementPolicyRequestDto extends IBaseModel {
  id: string;
}

@JsonObject()
export class ValidateRequirementPolicyRequestDto
  extends RequestDto
  implements IValidateRequirementPolicyRequestDto
{
  @JsonProperty()
  id: string;
}
