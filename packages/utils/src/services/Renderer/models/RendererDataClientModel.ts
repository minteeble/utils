import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";

/**
 * NftRenderer type
 */
export enum NftRendererType {
  DEFAULT = "DEFAULT",
  LAYERS = "LAYERS",
  ITEMS = "ITEMS",
  GADGETS = "GADGETS",
  IPFS = "IPFS",
  UPLOAD = "UPLOAD",
  HTTP = "HTTP",
  CUSTOM_HTTP = "CUSTOM_HTTP",
}

export interface IRendererDataClientModel extends IBaseModel {
  /**
   * NftRenderer ID
   */
  id: string;

  /**
   * Renderer name
   */
  name: string;

  /**
   * NftRenderer Type
   */
  type: NftRendererType;

  /**
   * Indicates if the data to render is cacheable or not.
   */
  cacheable: boolean;

  /**
   * A condition according to which Renderer should render the image/json
   */
  renderingCondition?: boolean | string;

  /**
   * Renderer owner
   */
  resourceOwner: string;

  /**
   * Main resource's Base URI
   */
  baseUri?: string;

  /**
   * Other attributes
   */
  attributes: { [key: string]: string };

  /**
   * Variables to be substituted inside metadata in many fields such as name, description, attributes, etc.
   */
  variables?: { [name: string]: string };
}

@JsonObject()
export class RendererDataClientModel
  extends BaseModel
  implements IRendererDataClientModel
{
  @JsonProperty()
  name: string;

  @JsonProperty({ required: true })
  id: string;

  @JsonProperty({ required: true })
  type: NftRendererType;

  @JsonProperty()
  renderingCondition?: boolean | string;

  @JsonProperty()
  cacheable: boolean;

  @JsonProperty({ required: true })
  resourceOwner: string;

  @JsonProperty()
  baseUri?: string;

  @JsonProperty()
  attributes: { [key: string]: any };

  @JsonProperty()
  variables?: { [name: string]: string };

  /**
   *
   * @returns The raw version of renderer data, that can
   * be used later inside NftRenderFactory for determining the correct NftRender instance
   */
  public getRawRendererData(): { [key: string]: any } {
    let object = {
      id: this.id,
      name: this.name,
      type: this.type,
      resourceOwner: this.resourceOwner,
      renderingCondition: this.renderingCondition,
      cacheable: this.cacheable,
      variables: this.variables,
      baseUri: this.baseUri,
    };

    return Object.assign(object, this.attributes);
  }
}
