import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  ISingleOwnableClientModel,
  SingleOwnableClientModel,
} from "./SingleOwnableClientModel";

export interface INftCollectionInfoPreview extends ISingleOwnableClientModel {
  /**
   * Chain name such as rinkeby, mainnet, etc
   */
  chainName: string;

  /**
   * Collection address
   */
  address: string;
}

@JsonObject()
export class NftCollectionInfoPreview
  extends SingleOwnableClientModel
  implements INftCollectionInfoPreview
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  address: string;
}
