import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface ICreateGadgetRequestDto extends IBaseModel {
  groupId: string;

  tokenId: number;

  traitName: string;

  value: string;
}

@JsonObject()
export class CreateGadgetRequestDto
  extends RequestDto
  implements ICreateGadgetRequestDto
{
  @JsonProperty()
  groupId: string;

  @JsonProperty()
  tokenId: number;

  @JsonProperty()
  traitName: string;

  @JsonProperty()
  value: string;
}
