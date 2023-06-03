import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IUpdateGenerationRequestDto extends IBaseModel {
  generationId: string;

  attributes: { [key: string]: string };
}

@JsonObject()
export class UpdateGenerationRequestDto
  extends RequestDto
  implements IUpdateGenerationRequestDto
{
  @JsonProperty()
  generationId: string;

  @JsonProperty()
  attributes: { [key: string]: string };
}
