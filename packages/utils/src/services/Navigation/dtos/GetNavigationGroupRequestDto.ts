import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IGetNavigationGroupRequestDto extends IBaseModel {
  groupName: string;
}

@JsonObject()
export class GetNavigationGroupRequestDto
  extends RequestDto
  implements IGetNavigationGroupRequestDto
{
  @JsonProperty()
  groupName: string;
}
