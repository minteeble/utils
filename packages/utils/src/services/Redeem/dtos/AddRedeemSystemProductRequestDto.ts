import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";
import {
  IProductVariationClientModel,
  ProductVariationClientModel,
} from "../models";

export interface IAddRedeemSystemProductRequestDto extends IBaseModel {
  redeemSystemId: string;

  parentId?: string;

  name: string;

  description: string;

  attributes: { [key: string]: any };

  supply?: number;

  variations: Array<IProductVariationClientModel>;
}

@JsonObject()
export class AddRedeemSystemProductRequestDto
  extends RequestDto
  implements IAddRedeemSystemProductRequestDto
{
  @JsonProperty({ required: true })
  redeemSystemId: string;

  @JsonProperty()
  parentId?: string;

  @JsonProperty({ required: true })
  name: string;

  @JsonProperty()
  description: string;

  @JsonProperty()
  attributes: { [key: string]: any };

  @JsonProperty()
  supply?: number;

  @JsonProperty({ type: ProductVariationClientModel })
  variations: Array<ProductVariationClientModel>;

  constructor() {
    super();
    this.description = "";
    this.name = "";
    this.variations = [];
  }
}
