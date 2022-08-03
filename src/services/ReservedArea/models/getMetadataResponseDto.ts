import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../shared";

export interface IGetMetadataResponseDto extends IBaseModel {
  urlName: string;

  fullName: string;
}

@JsonObject()
export class GetMetadataResponseDto
  extends BaseModel
  implements IGetMetadataResponseDto
{
  @JsonProperty()
  urlName: string;

  @JsonProperty()
  fullName: string;
}
