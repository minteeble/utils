import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  BaseModel,
  IBaseModel,
  ISingleOwnableClientModel,
  SingleOwnableClientModel,
} from "../../../../shared";

export interface IGetNftCollectionInfoRequestDto extends IBaseModel {
  chainName: string;

  collectionId: string;

  /**
   * Specifies if ABI has to be fetched or not.
   */
  fetchAbi?: boolean;
}

@JsonObject()
export class GetNftCollectionInfoRequestDto
  extends BaseModel
  implements IGetNftCollectionInfoRequestDto
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionId: string;

  @JsonProperty()
  fetchAbi?: boolean;

  constructor() {
    super();

    this.fetchAbi = false;
  }
}
