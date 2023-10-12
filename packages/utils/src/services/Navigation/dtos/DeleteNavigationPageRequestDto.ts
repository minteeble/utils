import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IDeleteNavigationPageRequestDto extends IBaseModel {
  groupName: string;

  sectionName: string;

  pageName: string;
}

@JsonObject()
export class DeleteNavigationPageRequestDto
  extends RequestDto
  implements IDeleteNavigationPageRequestDto
{
  @JsonProperty()
  groupName: string;

  @JsonProperty()
  sectionName: string;

  @JsonProperty()
  pageName: string;
}
