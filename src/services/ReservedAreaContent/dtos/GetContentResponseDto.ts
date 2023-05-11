import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../shared";
import { ContentType } from "../models";

export interface IGetContentResponseDto extends IBaseModel {
  type: ContentType;
}

@JsonObject()
export class GetContentResponseDto
  extends BaseModel
  implements IGetContentResponseDto
{
  @JsonProperty()
  type: ContentType;
}
