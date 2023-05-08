import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../shared";

export interface IGetReservedAreaResponseDto extends IBaseModel {
  displayName: string;
  description: string;
  logoImage: string;
  bannerImage: string;
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
  logoImage: string;

  @JsonProperty()
  bannerImage: string;

  @JsonProperty()
  accessPolicyId: string;
}
