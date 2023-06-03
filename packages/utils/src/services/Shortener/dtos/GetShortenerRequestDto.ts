import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetShortenerRequestDto extends IBaseModel {
  shortenerId: string;
}

@JsonObject()
export class GetShortenerRequestDto
  extends RequestDto
  implements IGetShortenerRequestDto
{
  @JsonProperty()
  shortenerId: string;
}
