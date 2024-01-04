import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IFilterNftsOnTraitsRequestDto extends IBaseModel {
  traits: string;

  chainName: string;

  collectionId: string;
}

@JsonObject()
export class FilterNftsOnTraitsRequestDto
  extends RequestDto
  implements IFilterNftsOnTraitsRequestDto
{
  @JsonProperty()
  traits: string;

  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionId: string;
}
