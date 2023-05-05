import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";

export interface IUpdateGadgetGroupRequestDto extends IBaseModel {
  name: string;

  chainName: string;

  collectionId: string;

  groupId: string;
}

@JsonObject()
export class UpdateGadgetGroupRequestDto
  extends RequestDto
  implements IUpdateGadgetGroupRequestDto
{
  @JsonProperty()
  name: string;

  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionId: string;

  @JsonProperty()
  groupId: string;
}
