import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface ICreateSectionRequestDto extends IBaseModel {
  policyId: string;

  reservedAreaUrlName: string;
}

@JsonObject()
export class CreateSectionRequestDto
  extends RequestDto
  implements ICreateSectionRequestDto
{
  @JsonProperty()
  policyId: string;

  @JsonProperty()
  reservedAreaUrlName: string;
}
