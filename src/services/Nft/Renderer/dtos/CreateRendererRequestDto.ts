import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel, RequestDto } from "../../../../shared";
import { NftRendererType } from "../models";

export interface ICreateRendererRequestDto extends IBaseModel {
  /**
   * NftRenderer Type
   */
  type: NftRendererType;

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
  attributes: { [key: string]: string };
}
