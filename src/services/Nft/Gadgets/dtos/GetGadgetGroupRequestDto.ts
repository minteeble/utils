import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";

export interface IGetGadgetGroupRequestDto extends IBaseModel {
  groupId: string;
}

@JsonObject()
export class GetGadgetGroupRequestDto
  extends RequestDto
  implements IGetGadgetGroupRequestDto
{
  @JsonProperty()
  groupId: string;
}
