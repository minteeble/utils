import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";

export interface IGetGroupGadgetsRequestDto extends IBaseModel {
  groupId: string;
}

@JsonObject()
export class GetGroupGadgetsRequestDto
  extends RequestDto
  implements IGetGroupGadgetsRequestDto
{
  @JsonProperty()
  groupId: string;
}
