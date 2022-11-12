import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  BaseModel,
  IBaseModel,
  ISingleOwnableClientModel,
  RequestDto,
  SingleOwnableClientModel,
} from "../../../../shared";

export interface IGetNftCollectionInfoRequestDto extends IBaseModel {
  chainName: string;

  collectionId: string;

  /**
   * Specifies if ABI has to be fetched or not.
   */
  fetchAbi?: string;
}

@JsonObject()
export class GetNftCollectionInfoRequestDto
  extends RequestDto
  implements IGetNftCollectionInfoRequestDto
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionId: string;

  @JsonProperty()
  fetchAbi?: string;

  constructor() {
    super();

    this.fetchAbi = "0";
  }
}
