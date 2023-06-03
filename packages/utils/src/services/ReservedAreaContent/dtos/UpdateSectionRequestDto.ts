import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IUpdateSectionRequestDto extends IBaseModel {
  reservedAreaUrlName: string;

  sectionId: string;

  policyId: string;
}

@JsonObject()
export class UpdateSectionRequestDto
  extends RequestDto
  implements IUpdateSectionRequestDto
{
  @JsonProperty()
  reservedAreaUrlName: string;

  @JsonProperty()
  sectionId: string;

  @JsonProperty()
  policyId: string;
}
