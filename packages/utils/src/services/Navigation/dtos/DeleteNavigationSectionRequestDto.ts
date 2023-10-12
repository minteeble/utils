import { IBaseModel, RequestDto } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";

export interface IDeleteNavigationSectionRequestDto extends IBaseModel {
  groupName: string;

  sectionName: string;
}

@JsonObject()
export class DeleteNavigationSectionRequestDto
  extends RequestDto
  implements IDeleteNavigationSectionRequestDto
{
  @JsonProperty()
  groupName: string;

  @JsonProperty()
  sectionName: string;
}
