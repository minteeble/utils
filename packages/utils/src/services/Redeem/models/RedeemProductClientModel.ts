import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";

export interface IProductVariationClientModel extends IBaseModel {
  variationName: string;

  supply?: number;
}

@JsonObject()
export class ProductVariationClientModel
  extends BaseModel
  implements IProductVariationClientModel
{
  @JsonProperty()
  variationName: string;

  @JsonProperty()
  supply?: number;
}

/**
 * Model representing a product, inside Redeem system logics
 */
export interface IRedeemProductClientModel extends IBaseModel {
  /**
   * Product id
   */
  id: string;

  /**
   * Parent product id. Is set, then the current product is a variation of another product
   */
  parentId?: string;

  /**
   * Product display name
   */
  name: string;

  /**
   * Product description
   */
  description: string;

  /**
   * Product custom images urls
   */
  imageUrls: Array<string>;

  /**
   * Product custom images number
   */
  imagesNumber: number;

  /**
   * Custom additional attributes
   */
  attributes: { [key: string]: any };

  /**
   * Product's supply. If Not set than the system will not handle supply
   */
  supply?: number;

  /**
   * List of variations
   */
  variations: Array<IProductVariationClientModel>;
}

export class RedeemProductClientModel
  extends BaseModel
  implements IRedeemProductClientModel
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  parentId?: string;

  @JsonProperty()
  name: string;

  @JsonProperty()
  description: string;

  @JsonProperty()
  imageUrls: Array<string>;

  @JsonProperty()
  imagesNumber: number;

  @JsonProperty()
  attributes: { [key: string]: any };

  @JsonProperty()
  supply?: number;

  @JsonProperty({ type: ProductVariationClientModel })
  variations: Array<ProductVariationClientModel>;

  constructor() {
    super();

    this.attributes = {};
    this.variations = [];
  }
}
