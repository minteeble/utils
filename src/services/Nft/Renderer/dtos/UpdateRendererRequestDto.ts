import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";

export interface IUpdateRendererRequestDto extends IBaseModel {
  rendererId: string;

  attributes: { [key: string]: string };
}

@JsonObject()
export class UpdateRendererRequestDto
  extends RequestDto
  implements IUpdateRendererRequestDto
{
  @JsonProperty()
  rendererId: string;

  @JsonProperty()
  attributes: { [key: string]: string };
}
