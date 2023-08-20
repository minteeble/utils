import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export enum ShortenedType {
  URL = "url",
}

export interface IShortenedClientModel extends IBaseModel {
  id: string;
  type: ShortenedType;
  object: any;
  createdBy?: string;
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

  @JsonProperty()
  createdBy?: string;
}
