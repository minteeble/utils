import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface ICreateNavigationPageRequestDto extends IBaseModel {
  sectionName: string;

  groupName: string;

  pageName: string;

  title: string;

  iconPath: string;

  path: string;

  tooltip?: string;
}

@JsonObject()
export class CreateNavigationPageRequestDto
  extends RequestDto
  implements ICreateNavigationPageRequestDto
{
  @JsonProperty()
  sectionName: string;

  @JsonProperty()
  groupName: string;

  @JsonProperty()
  pageName: string;

  @JsonProperty()
  title: string;

  @JsonProperty()
  iconPath: string;

  @JsonProperty()
  path: string;

  @JsonProperty()
  tooltip?: string | undefined;
}
