import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IRevealItemRequestDto extends IBaseModel {
  chainName: string;

  collectionId: string;

  nftId: string;
}

@JsonObject()
export class RevealItemRequestDto
  extends RequestDto
  implements IRevealItemRequestDto
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionId: string;

  @JsonProperty()
  nftId: string;
}
