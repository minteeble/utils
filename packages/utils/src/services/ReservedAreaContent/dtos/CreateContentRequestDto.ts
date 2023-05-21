import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";
import { ContentType } from "../models";

export interface ICreateContentRequestDto extends IBaseModel {
  type: ContentType;

  reservedAreaUrlName: string;

  sectionId: string;
}

@JsonObject()
export class CreateContentRequestDto
  extends RequestDto
  implements ICreateContentRequestDto
{
  @JsonProperty()
  type: ContentType;

  @JsonProperty()
  reservedAreaUrlName: string;

  @JsonProperty()
  sectionId: string;
}
