import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../shared";

export interface IGetRendererRequestDto extends IBaseModel {
  rendererId: string;
}

@JsonObject()
export class GetRendererRequestDto
  extends BaseModel
  implements IGetRendererRequestDto
{
  @JsonProperty()
  rendererId: string;
}
