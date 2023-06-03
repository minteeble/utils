import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";
import { NftGenerationType } from "../models";

export interface ICreateGenerationRequestDto extends IBaseModel {
  type: NftGenerationType;

  /**
   * Generation's name
   */
  name: string;

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
  name: string;

  @JsonProperty()
  attributes: { [key: string]: string };
}
