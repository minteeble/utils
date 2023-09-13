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

/**
 * Stages where variable resolution has to take place
 */
export enum NftRendererResolutionStage {
  /**
   * Always resolves, both cases: when user requests metadata or image
   */
  ALWAYS = "ALWAYS",

  /**
   * Resolves variable only when user requests metadata
   */
  ONLY_METADATA = "ONLY_METADATA",

  /**
   * Resolves vairable only when user requests images/media
   */
  ONLY_IMAGE = "ONLY_IMAGE",
}

/**
 * Nft Generation varibale object
 */
export interface NftRendererVariable {
  /*
   * variable name to be searched. If the name is "VAR", the system will search
   * for "{{ VAR }}", in order to substitute it with the corresponding content
   */
  name: string;

  /**
   * variable content to be substituted
   */
  content: string;

  /**
   * Specifies when does the resolution has to take place
   */
  resolutionStage: NftRendererResolutionStage;
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
  attributes: { [key: string]: any };

  /**
   * Variables to be substituted inside metadata in many fields such as name, description, attributes, etc.
   */
  variables: Array<NftRendererVariable>;
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
  variables: Array<NftRendererVariable>;

  constructor() {
    super();
    this.variables = [];
  }

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
