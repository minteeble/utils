import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";

export interface IDeleteGadgetGroupRequestDto extends IBaseModel {
  groupId: string;
}

@JsonObject()
export class DeleteGadgetGroupRequestDto
  extends RequestDto
  implements IDeleteGadgetGroupRequestDto
{
  @JsonProperty()
  groupId: string;
}
