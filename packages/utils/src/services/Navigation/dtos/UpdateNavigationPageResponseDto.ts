import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IUpdateNavigationPageRequestDto extends IBaseModel {
  sectionName: string;

  groupName: string;

  pageName: string;

  newTitle: string;

  newIconPath: string;

  newPath: string;

  newTooltip?: string;
}

@JsonObject()
export class UpdateNavigationPageRequestDto
  extends RequestDto
  implements IUpdateNavigationPageRequestDto
{
  @JsonProperty()
  sectionName: string;

  @JsonProperty()
  groupName: string;

  @JsonProperty()
  pageName: string;

  @JsonProperty()
  newTitle: string;

  @JsonProperty()
  newIconPath: string;

  @JsonProperty()
  newPath: string;

  @JsonProperty()
  newTooltip?: string;
}
