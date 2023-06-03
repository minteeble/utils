import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IDeleteRequirementPolicyRequestDto extends IBaseModel {
  id: string;
}

@JsonObject()
export class DeleteRequirementPolicyRequestDto
  extends RequestDto
  implements IDeleteRequirementPolicyRequestDto
{
  @JsonProperty()
  id: string;
}
