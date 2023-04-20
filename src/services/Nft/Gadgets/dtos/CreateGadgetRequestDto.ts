import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";

export interface ICreateGadgetRequestDto extends IBaseModel {
  groupId: string;

  traitName: string;

  value: string;

  tokenId: number;
}

@JsonObject()
export class CreateGadgetRequestDto
  extends RequestDto
  implements ICreateGadgetRequestDto
{
  @JsonProperty()
  groupId: string;

  @JsonProperty()
  traitName: string;

  @JsonProperty()
  value: string;

  @JsonProperty()
  tokenId: number;
}
