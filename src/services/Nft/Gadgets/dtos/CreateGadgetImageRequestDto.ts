import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";

export interface ICreateGadgetImageRequestDto extends IBaseModel {
  groupId: string;
  tokenId: string;
  imageString: string;
}

@JsonObject()
export class CreateGadgetImageRequestDto
  extends RequestDto
  implements ICreateGadgetImageRequestDto
{
  @JsonProperty()
  groupId: string;

  @JsonProperty()
  tokenId: string;

  @JsonProperty()
  imageString: string;
}
