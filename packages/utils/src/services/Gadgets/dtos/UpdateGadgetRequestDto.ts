import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IUpdateGadgetRequestDto extends IBaseModel {
  groupId: string;

  tokenId: string;

  newTraitName: string;

  newValue: string;
}

@JsonObject()
export class UpdateGadgetRequestDto
  extends RequestDto
  implements IUpdateGadgetRequestDto
{
  @JsonProperty()
  groupId: string;

  @JsonProperty()
  tokenId: string;

  @JsonProperty()
  newTraitName: string;

  @JsonProperty()
  newValue: string;
}
