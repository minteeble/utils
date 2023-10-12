import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IGetNavigationPageResponseDto extends IBaseModel {
  sectionName: string;

  groupName: string;

  pageName: string;

  title: string;

  iconPath: string;

  path: string;

  tooltip?: string;
}

@JsonObject()
export class GetNavigationPageResponseDto
  extends BaseModel
  implements IGetNavigationPageResponseDto
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
  tooltip?: string;
}
