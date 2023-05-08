import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";

export interface ICreateReservedAreaRequestDto extends IBaseModel {
  urlName: string;
  displayName: string;
  description: string;
  logoImage: string;
  bannerImage: string;
}

@JsonObject()
export class CreateReservedAreaRequestDto
  extends RequestDto
  implements ICreateReservedAreaRequestDto
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
}
