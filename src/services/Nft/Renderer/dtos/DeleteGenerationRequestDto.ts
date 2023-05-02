import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";

export interface IDeleteGenerationRequestDto extends IBaseModel {
  generationId: string;
}

@JsonObject()
export class DeleteGenerationRequestDto
  extends RequestDto
  implements IDeleteGenerationRequestDto
{
  @JsonProperty()
  generationId: string;
}
