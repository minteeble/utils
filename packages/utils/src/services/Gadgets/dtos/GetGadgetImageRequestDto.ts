import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetGadgetImageRequestDto extends IBaseModel {
  groupId: string;
  tokenId: string;
}

@JsonObject()
export class GetGadgetImageRequestDto
  extends RequestDto
  implements IGetGadgetImageRequestDto
{
  @JsonProperty()
  groupId: string;

  @JsonProperty()
  tokenId: string;
}
