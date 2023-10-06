import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface ICreateNavigationGroupRequestDto extends IBaseModel {
  name: string;
}

@JsonObject()
export class CreateNavigationGroupRequestDto
  extends RequestDto
  implements ICreateNavigationGroupRequestDto
{
  @JsonProperty()
  name: string;
}
