import { IBaseModel, BaseModel } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";
import { ShorteningType } from "./ShortenerClientModel";

export interface IShortenerPreviewClientModel extends IBaseModel {
  type: ShorteningType;
  id: string;
  TTLDelta: number;
}

@JsonObject()
export class ShortenerPreviewClientModel
  extends BaseModel
  implements IShortenerPreviewClientModel
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  type: ShorteningType;

  @JsonProperty()
  TTLDelta: number;
}
