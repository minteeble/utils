import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IUpdateNavigationSectionRequestDto extends IBaseModel {
  groupName: string;
  sectionName: string;
  newTitle: string;
}

@JsonObject()
export class UpdateNavigationSectionRequestDto
  extends BaseModel
  implements IUpdateNavigationSectionRequestDto
{
  @JsonProperty()
  groupName: string;

  @JsonProperty()
  sectionName: string;

  @JsonProperty()
  newTitle: string;
}
