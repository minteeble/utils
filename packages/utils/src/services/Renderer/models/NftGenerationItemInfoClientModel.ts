import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

/**
 * Basic info model related to each item
 */
export interface INftGenerationItemInfoClientModel extends IBaseModel {
  /**
   * NFT Item ID
   */
  nftId?: number;

  /**
   * Nft Generation ID
   */
  nftGenerationId: string;

  /**
   * Specifies if item is revealed or not;
   */
  revealed: boolean;

  /**
   * Specifies if item has been mutated or not.
   * If yes it is equal to the mutation variant name
   */
  mutated?: string;

  /**
   * Specifies if a mutated item is active or not.
   * (Every mutated item can be deactivated, if allowed by mutation system)
   */
  mutationActive?: boolean;
}

/**
 * Basic info model related to each item
 */
@JsonObject()
export class NftGenerationItemInfoClientModel
  extends BaseModel
  implements INftGenerationItemInfoClientModel
{
  @JsonProperty()
  nftId?: number | undefined;

  @JsonProperty()
  nftGenerationId: string;

  @JsonProperty()
  revealed: boolean;

  @JsonProperty()
  mutated?: string;

  @JsonProperty()
  mutationActive?: boolean;
}
