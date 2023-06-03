import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IDeleteGadgetRequestDto extends IBaseModel {
  groupId: string;

  tokenId: number;
}

@JsonObject()
export class DeleteGadgetRequestDto
  extends RequestDto
  implements IDeleteGadgetRequestDto
{
  @JsonProperty()
  groupId: string;

  @JsonProperty()
  tokenId: number;
}
