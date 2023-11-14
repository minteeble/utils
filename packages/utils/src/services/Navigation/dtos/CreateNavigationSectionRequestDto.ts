import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { RoleType } from "../models";

export interface ICreateNavigationSectionRequestDto extends IBaseModel {
  groupName: string;

  sectionName: string;

  title: string;
}

@JsonObject()
export class CreateNavigationSectionRequestDto
  extends RequestDto
  implements ICreateNavigationSectionRequestDto
{
  @JsonProperty()
  groupName: string;

  @JsonProperty()
  sectionName: string;

  @JsonProperty()
  title: string;
}
