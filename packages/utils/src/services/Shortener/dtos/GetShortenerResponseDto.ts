import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { ShorteningType } from "../models";

export interface IGetShortenerResponseDto extends IBaseModel {
  name: string;
  type: ShorteningType;
  resourceOwner: string;
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
  resourceOwner: string;

  @JsonProperty()
  TTLDelta: number;
}
