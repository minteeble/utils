import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";

export interface IUpdateReservedAreaRequestDto extends IBaseModel {
  urlName: string;
  displayName: string;
  description: string;
  logoImage: string;
  bannerImage: string;
  accessPolicyId: string;
}

@JsonObject()
export class UpdateReservedAreaRequestDto
  extends RequestDto
  implements IUpdateReservedAreaRequestDto
{
  @JsonProperty()
  urlName: string;

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
