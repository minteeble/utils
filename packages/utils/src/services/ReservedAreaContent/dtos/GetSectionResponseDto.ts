import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../models";

export interface IGetSectionResponseDto extends IBaseModel {
  policyId: string;
}

@JsonObject()
export class GetSectionResponseDto
  extends BaseModel
  implements IGetSectionResponseDto
{
  @JsonProperty()
  policyId: string;
}
