import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IMutateItemRequestDto extends IBaseModel {
  chainName: string;

  mutationVariantName: string;

  collectionId: string;

  nftId: string;
}

@JsonObject()
export class MutateItemRequestDto
  extends RequestDto
  implements IMutateItemRequestDto
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  mutationVariantName: string;

  @JsonProperty()
  collectionId: string;

  @JsonProperty()
  nftId: string;
}
