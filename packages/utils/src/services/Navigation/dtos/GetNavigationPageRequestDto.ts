import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IGetNavigationPageRequestDto extends IBaseModel {
  groupName: string;
  sectionName: string;
  pageName: string;
}

@JsonObject()
export class GetNavigationPageRequestDto
  extends RequestDto
  implements IGetNavigationPageRequestDto
{
  @JsonProperty()
  groupName: string;

  @JsonProperty()
  sectionName: string;

  @JsonProperty()
  pageName: string;
}
