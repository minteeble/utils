import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";

export interface IGetShortenedRequestDto extends IBaseModel {
  shortenerId: string;
  shortenedObjectId: string;
}

@JsonObject()
export class GetShortenedRequestDto
  extends RequestDto
  implements IGetShortenedRequestDto
{
  @JsonProperty()
  shortenerId: string;

  @JsonProperty()
  shortenedObjectId: string;
}
