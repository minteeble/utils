import { IBaseModel, BaseModel } from "../../../shared";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { ShortenedType } from "../models";

export interface IGetShortenedResponseDto extends IBaseModel {
  type: ShortenedType;
  object: any;
}

@JsonObject()
export class GetShortenedResponseDto
  extends BaseModel
  implements IGetShortenedResponseDto
{
  @JsonProperty()
  type: ShortenedType;

  @JsonObject()
  object: any;
}
