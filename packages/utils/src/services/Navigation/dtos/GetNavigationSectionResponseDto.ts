import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { NavigationPageClientModel } from "../models";

export interface IGetNavigationSectionResponseDto extends IBaseModel {
  groupName: string;
  sectionName: string;
  pages: NavigationPageClientModel[];
}

@JsonObject()
export class GetNavigationSectionResponseDto
  extends BaseModel
  implements IGetNavigationSectionResponseDto
{
  @JsonProperty()
  groupName: string;

  @JsonProperty()
  sectionName: string;

  @JsonProperty()
  pages: NavigationPageClientModel[];
}
