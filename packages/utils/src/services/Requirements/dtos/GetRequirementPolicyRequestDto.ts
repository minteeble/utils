import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetRequirementPolicyRequestDto extends IBaseModel {
  id: string;
}

@JsonObject()
export class GetRequirementPolicyRequestDto
  extends RequestDto
  implements IGetRequirementPolicyRequestDto
{
  @JsonProperty()
  id: string;
}
