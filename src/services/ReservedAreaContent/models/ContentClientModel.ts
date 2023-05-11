import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../shared";

export enum ContentType {
  FILE = "file",
  TOOL = "tool",
}

export interface IContentClientModel extends IBaseModel {
  type: ContentType;

  sectionId: string;

  id: string;
}

@JsonObject()
export class ContentClientModel
  extends BaseModel
  implements IContentClientModel
{
  @JsonProperty()
  type: ContentType;

  @JsonProperty()
  sectionId: string;

  @JsonProperty()
  id: string;
}
