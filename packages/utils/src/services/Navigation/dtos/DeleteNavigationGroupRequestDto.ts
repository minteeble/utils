import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IDeleteNavigationGroupRequestDto extends IBaseModel {
  groupName: string;
}

@JsonObject()
export class DeleteNavigationGroupRequestDto
  extends RequestDto
  implements IDeleteNavigationGroupRequestDto
{
  @JsonProperty()
  groupName: string;
}
