import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IGetCollectionTraitsRequestDto extends IBaseModel {
  traits: string;

  chainName: string;

  collectionId: string;
}

@JsonObject()
export class GetCollectionTraitsRequestDto
  extends RequestDto
  implements IGetCollectionTraitsRequestDto
{
  @JsonProperty()
  traits: string;

  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionId: string;
}
