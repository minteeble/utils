import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";
import { ShortenedType } from "../models";

export interface ICreateShortenedRequestDto extends IBaseModel {
  shortenerId: string;
  type: ShortenedType;
  object: any;
}

@JsonObject()
export class CreateShortenedRequestDto
  extends RequestDto
  implements ICreateShortenedRequestDto
{
  @JsonProperty()
  shortenerId: string;

  @JsonProperty()
  type: ShortenedType;

  @JsonProperty()
  object: any;
}
