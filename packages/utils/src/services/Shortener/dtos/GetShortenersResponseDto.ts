import { IBaseModel, BaseModel } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";
import { ShortenerPreviewClientModel } from "../models";

export interface IGetShortenersResponseDto extends IBaseModel {
  shorteners: Array<ShortenerPreviewClientModel>;
}

@JsonObject()
export class GetShortenersResponseDto
  extends BaseModel
  implements IGetShortenersResponseDto
{
  @JsonProperty()
  shorteners: ShortenerPreviewClientModel[];
}
