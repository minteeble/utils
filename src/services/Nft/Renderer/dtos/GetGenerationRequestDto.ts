import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";

export interface IGetGenerationRequestDto extends IBaseModel {
  generationId: string;
}

@JsonObject()
export class GetGenerationRequestDto
  extends RequestDto
  implements IGetGenerationRequestDto
{
  @JsonProperty()
  generationId: string;
}
