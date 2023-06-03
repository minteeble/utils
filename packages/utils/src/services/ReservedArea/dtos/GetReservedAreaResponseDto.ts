import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";

export interface IGetReservedAreaResponseDto extends IBaseModel {
  displayName: string;
  description: string;
  accessPolicyId: string;
}

@JsonObject()
export class GetReservedAreaResponseDto
  extends BaseModel
  implements IGetReservedAreaResponseDto
{
  @JsonProperty()
  displayName: string;

  @JsonProperty()
  description: string;

  @JsonProperty()
  accessPolicyId: string;
}
