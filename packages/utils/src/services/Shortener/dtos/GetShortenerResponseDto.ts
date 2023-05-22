import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { ShorteningType } from "../models";

export interface IGetShortenerResponseDto extends IBaseModel {
  name: string;
  type: ShorteningType;
  id: string;
  resourceOwner: string;
  index: number | null;
  TTLDelta: number;
}

@JsonObject()
export class GetShortenerResponseDto
  extends BaseModel
  implements IGetShortenerResponseDto
{
  @JsonProperty()
  name: string;

  @JsonProperty()
  type: ShorteningType;

  @JsonProperty()
  id: string;

  @JsonProperty()
  resourceOwner: string;

  @JsonProperty()
  index: number | null;

  @JsonProperty()
  TTLDelta: number;
}
