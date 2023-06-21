import { JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";

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
   * Product custom image
   */
  imageUrl: string;

  /**
   * Custom additional attributes
   */
  attributes: { [key: string]: any };

  /**
   * Product's supply. If Not set than the system will not handle supply
   */
  supply?: number;
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
  imageUrl: string;

  @JsonProperty()
  attributes: { [key: string]: any };

  @JsonProperty()
  supply?: number;

  constructor() {
    super();

    this.attributes = {};
  }
}
