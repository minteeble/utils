import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";

export interface IUpdateSectionRequestDto extends IBaseModel {
  policyId: string;
}

@JsonObject()
export class UpdateSectionRequestDto
  extends RequestDto
  implements IUpdateSectionRequestDto
{
  @JsonProperty()
  policyId: string;
}
