import { IBaseModel, BaseModel } from "../../../shared";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export enum ShortenedType {
  URL = "url",
}

export interface IShortenedClientModel extends IBaseModel {
  id: string;
  type: ShortenedType;
  object: any;
}

@JsonObject()
export class ShortenedClientModel
  extends BaseModel
  implements IShortenedClientModel
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  object: any;

  @JsonProperty()
  type: ShortenedType;
}
