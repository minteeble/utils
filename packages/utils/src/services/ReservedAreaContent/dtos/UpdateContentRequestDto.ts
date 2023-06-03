import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";
import { ContentType } from "../models";

export interface IUpdateContentRequestDto extends IBaseModel {
  contentId: string;
  sectionId: string;
  newSectionId: string;
  reservedAreaUrlName: string;
  type: ContentType;
}

@JsonObject()
export class UpdateContentRequestDto
  extends RequestDto
  implements IUpdateContentRequestDto
{
  @JsonProperty()
  contentId: string;

  @JsonProperty()
  sectionId: string;

  @JsonProperty()
  newSectionId: string;

  @JsonProperty()
  reservedAreaUrlName: string;

  @JsonProperty()
  type: ContentType;
}
