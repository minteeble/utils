import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IActivateMutationRequestDto extends IBaseModel {
  chainName: string;

  collectionId: string;

  mutationStatus: boolean;

  nftId: string;
}

@JsonObject()
export class ActivateMutationRequestDto
  extends RequestDto
  implements IActivateMutationRequestDto
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionId: string;

  @JsonProperty()
  mutationStatus: boolean;

  @JsonProperty()
  nftId: string;
}
