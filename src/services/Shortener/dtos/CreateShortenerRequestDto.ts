import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";
import { ShorteningType } from "../models";

export interface ICreateShortenerRequestDto extends IBaseModel {
  name: string;
  type: ShorteningType;
  TTLDelta: number;
}

@JsonObject()
export class CreateShortenerRequestDto
  extends RequestDto
  implements ICreateShortenerRequestDto
{
  @JsonProperty()
  name: string;

  @JsonProperty()
  type: ShorteningType;

  @JsonProperty()
  TTLDelta: number;
}
