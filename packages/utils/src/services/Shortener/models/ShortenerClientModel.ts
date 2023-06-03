import { IBaseModel, BaseModel } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";

export enum ShorteningType {
  INCREMENTAL = "incremental",
  UUID = "uuid",
}

export interface IShortenerClientModel extends IBaseModel {
  name: string;
  type: ShorteningType;
  id: string;
  resourceOwner: string;
  index: number | null;
  TTLDelta: number;
}

@JsonObject()
export class ShortenerClientModel
  extends BaseModel
  implements IShortenerClientModel
{
  @JsonProperty()
  name: string;

  @JsonProperty()
  id: string;

  @JsonProperty()
  resourceOwner: string;

  @JsonProperty()
  type: ShorteningType;

  @JsonProperty()
  index: number | null;

  @JsonProperty()
  TTLDelta: number;
}
