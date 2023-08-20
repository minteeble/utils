import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IUpdateCollectionInfoRequestDto extends IBaseModel {
  chainName: string;

  collectionId: string;

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
  generationId: string;

  @JsonProperty()
  name: string;

  @JsonProperty()
  description: string;

  public isValid(): boolean {
    return this.description || this.name || this.generationId ? true : false;
  }
}
