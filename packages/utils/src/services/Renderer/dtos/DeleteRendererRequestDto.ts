import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IDeleteRendererRequestDto extends IBaseModel {
  rendererId: string;
}

@JsonObject()
export class DeleteRendererRequestDto
  extends RequestDto
  implements IDeleteRendererRequestDto
{
  @JsonProperty()
  rendererId: string;
}
