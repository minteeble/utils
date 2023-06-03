import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel, RequestDto } from "../../../models";

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
