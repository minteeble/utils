import { IBaseModel, RequestDto } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";

export interface IGetNavigationSectionRequestDto extends IBaseModel {
  groupName: string;

  sectionName: string;
}

@JsonObject()
export class GetNavigationSectionRequestDto
  extends RequestDto
  implements IGetNavigationSectionRequestDto
{
  @JsonProperty()
  groupName: string;

  @JsonProperty()
  sectionName: string;
}
