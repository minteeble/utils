import { IBaseModel, RequestDto } from "../../../shared";
import { JsonProperty, JsonObject } from "typescript-json-serializer";

export interface IDeleteShortenedRequestDto extends IBaseModel {
  shortenerId: string;
  shortenedObjectId: string;
}

@JsonObject()
export class DeleteShortenedRequestDto
  extends RequestDto
  implements IDeleteShortenedRequestDto
{
  @JsonProperty()
  shortenerId: string;

  @JsonProperty()
  shortenedObjectId: string;
}
