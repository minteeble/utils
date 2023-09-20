import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../models";
import {
  IRendererDataClientModel,
  RendererDataClientModel,
} from "../../models";

/**
 * Names of `HttpRenderer` custom actions
 */
export enum HttpRendererCustomActionNames {}

/**
 * `HttpRenderer` Data Attributes interface model
 */
export interface IHttpRendererDataAttributes extends IBaseModel {
  /**
   * Base http url such as `https://www.example.com`
   */
  baseUrl: string;

  /**
   * Specifies if nft ids should be appended to base url.
   * If true, than the nfts won't be appended at the end of the base url.
   * It can be used for allowing pre-reveal features
   */
  disableNftIds: boolean;
}

/**
 * `HttpRenderer` Data Attributes class model
 */
@JsonObject()
export class HttpRendererDataAttributes
  extends BaseModel
  implements IHttpRendererDataAttributes
{
  @JsonProperty()
  baseUrl: string;

  @JsonProperty()
  disableNftIds: boolean;
}

/**
 * `HttpRenderer` interface client model
 */
export interface IHttpRendererDataClientModel extends IRendererDataClientModel {
  attributes: IHttpRendererDataAttributes | { [key: string]: any };
}

/**
 * `HttpRenderer` class client model
 */
@JsonObject()
export class HttpRendererDataClientModel
  extends RendererDataClientModel
  implements IHttpRendererDataClientModel
{
  @JsonProperty({ type: HttpRendererDataAttributes })
  attributes: HttpRendererDataAttributes;
}
