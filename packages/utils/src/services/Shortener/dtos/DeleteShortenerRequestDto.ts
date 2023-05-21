import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IDeleteShortenerRequestDto extends IBaseModel {
  shortenerId: string;
}

@JsonObject()
export class DeleteShortenerRequestDto
  extends RequestDto
  implements IDeleteShortenerRequestDto
{
  @JsonProperty()
  shortenerId: string;
}
