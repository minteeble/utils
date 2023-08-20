import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface ISetMutationStatusRequestDto extends IBaseModel {
  chainName: string;

  collectionId: string;

  mutationStatus: boolean;

  nftId: string;
}

@JsonObject()
export class SetMutationStatusRequestDto
  extends RequestDto
  implements ISetMutationStatusRequestDto
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
