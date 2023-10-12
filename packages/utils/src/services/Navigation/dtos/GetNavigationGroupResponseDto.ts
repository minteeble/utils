import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IGetNavigationGroupResponseDto extends IBaseModel {
  groupName: string;
  sectionNames: string[];
}

@JsonObject()
export class GetNavigationGroupResponseDto
  extends BaseModel
  implements IGetNavigationGroupResponseDto
{
  @JsonProperty()
  groupName: string;

  @JsonProperty()
  sectionNames: string[];
}
