import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../../shared";

export interface IUpdateCollectionInfoRequestDto extends IBaseModel {
  chainName: string;

  collectionId: string;

  rendererId: string;

  generationId: string;

  name: string;

  description: string;
}

@JsonObject()
export class UpdateCollectionInfoRequestDto
  extends RequestDto
  implements IUpdateCollectionInfoRequestDto
{
  @JsonProperty({ required: true })
  chainName: string;

  @JsonProperty({ required: true })
  collectionId: string;

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
