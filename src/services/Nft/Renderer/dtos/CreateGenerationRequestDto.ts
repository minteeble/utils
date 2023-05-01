import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";
import { NftGenerationType } from "../models";

export interface ICreateGenerationRequestDto extends IBaseModel {
  type: NftGenerationType;

  /**
   * Other attributes
   */
  attributes: { [key: string]: string };
}

@JsonObject()
export class CreateGenerationRequestDto
  extends RequestDto
  implements ICreateGenerationRequestDto
{
  @JsonProperty()
  type: NftGenerationType;

  @JsonProperty()
  attributes: { [key: string]: string };
}
