import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";

export interface IUpdateCollectionInfoRequestDto extends IBaseModel {
  rendererId: string;

  generationId: string;

  name: string;

  description: string;
}

@JsonObject()
export class UpdateCollectionInfoRequestInfo
  extends RequestDto
  implements IUpdateCollectionInfoRequestDto
{
  @JsonProperty()
  rendererId: string;

  @JsonProperty()
  generationId: string;

  @JsonProperty()
  name: string;

  @JsonProperty()
  description: string;

  public isValid(): boolean {
    return this.description || this.rendererId || this.name || this.generationId
      ? true
      : false;
  }
}
