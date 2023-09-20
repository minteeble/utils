import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../models";
import {
  IRendererDataClientModel,
  RendererDataClientModel,
} from "../../models";

/**
 * Names of `GadgetsRenderer` custom actions
 */
export enum GadgetsRendererCustomActionNames {}

/**
 * `GadgetsRenderer` Data Attributes interface model
 */
export interface IGadgetsRendererDataAttributes extends IBaseModel {
  /**
   * ID of the geadgets group to get gadgets from
   */
  gadgetGroupId: string;

  /**
   * Gadgets collection chain name
   */
  collectionChainName: string;

  /**
   * Gadgets collection id
   */
  collectionId: string;
}

/**
 * `GadgetsRenderer` Data Attributes class model
 */
@JsonObject()
export class GadgetsRendererDataAttributes
  extends BaseModel
  implements IGadgetsRendererDataAttributes
{
  @JsonProperty()
  gadgetGroupId: string;

  @JsonProperty()
  collectionChainName: string;

  @JsonProperty()
  collectionId: string;
}

/**
 * `GadgetsRenderer` interface client model
 */
export interface IGadgetsRendererDataClientModel
  extends IRendererDataClientModel {
  attributes: IGadgetsRendererDataAttributes | { [key: string]: any };
}

/**
 * `GadgetsRenderer` class client model
 */
@JsonObject()
export class GadgetsRendererDataClientModel
  extends RendererDataClientModel
  implements IGadgetsRendererDataClientModel
{
  @JsonProperty({ type: GadgetsRendererDataAttributes })
  attributes: GadgetsRendererDataAttributes;
}
