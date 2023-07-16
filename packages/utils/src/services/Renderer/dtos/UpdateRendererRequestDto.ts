import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IUpdateRendererRequestDto extends IBaseModel {
  rendererId: string;

  attributes: { [key: string]: string };

  cacheable: boolean;

  renderingCondition?: boolean | string;
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

  @JsonProperty()
  cacheable: boolean;

  @JsonProperty()
  renderingCondition?: boolean | string;
}
