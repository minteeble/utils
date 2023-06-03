import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel, RequestDto } from "../../../models";
import { NftRendererType } from "../models";

export interface ICreateRendererRequestDto extends IBaseModel {
  /**
   * NftRenderer Type
   */
  type: NftRendererType;

  /**
   * Renderer name
   */
  name: string;

  /**
   * Other attributes
   */
  attributes: { [key: string]: string };
}

@JsonObject()
export class CreateRendererRequestDto
  extends RequestDto
  implements ICreateRendererRequestDto
{
  @JsonProperty()
  type: NftRendererType;

  @JsonProperty()
  name: string;

  @JsonProperty()
  attributes: { [key: string]: string };
}
