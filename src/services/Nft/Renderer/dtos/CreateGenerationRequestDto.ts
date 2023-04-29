import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";
import { NftGenerationType } from "../models";

export interface ICreateGenerationRequestDto extends IBaseModel {
  maxSupply: number;

  type: NftGenerationType;
}

@JsonObject()
export class CreateGenerationRequestDto
  extends RequestDto
  implements ICreateGenerationRequestDto
{
  @JsonProperty()
  maxSupply: number;

  @JsonProperty()
  type: NftGenerationType;
}
