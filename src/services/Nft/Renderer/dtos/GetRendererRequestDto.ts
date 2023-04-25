import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel, RequestDto } from "../../../../shared";

export interface IGetRendererRequestDto extends IBaseModel {
  rendererId: string;
}

@JsonObject()
export class GetRendererRequestDto
  extends RequestDto
  implements IGetRendererRequestDto
{
  @JsonProperty()
  rendererId: string;
}
