import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";

export interface ICreateGadgetGroupRequestDto extends IBaseModel {
  name: string;

  collectionId: string;
}

@JsonObject()
export class CreateGadgetGroupRequestDto
  extends RequestDto
  implements ICreateGadgetGroupRequestDto
{
  @JsonProperty()
  name: string;

  @JsonProperty()
  collectionId: string;
}
