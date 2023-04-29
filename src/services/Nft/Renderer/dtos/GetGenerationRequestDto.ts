import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";
import { NftGenerationType } from "../models";

export interface IGetGenerationRequestDto extends IBaseModel {
  generationId: string;

  type: NftGenerationType;
}

@JsonObject()
export class GetGenerationRequestDto
  extends RequestDto
  implements IGetGenerationRequestDto
{
  @JsonProperty()
  generationId: string;

  @JsonProperty()
  type: NftGenerationType;
}
