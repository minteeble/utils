import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../models";
import {
  IRendererDataClientModel,
  RendererDataClientModel,
} from "../../models";

/**
 * Names of `IpfsRenderer` custom actions
 */
export enum IpfsRendererCustomActionNames {}

/**
 * `IpfsRenderer` Data Attributes interface model
 */
export interface IIpfsRendererDataAttributes extends IBaseModel {
  /**
   * Ipfs CID string
   */
  cid: string;
}

/**
 * `IpfsRenderer` Data Attributes class model
 */
@JsonObject()
export class IpfsRendererDataAttributes
  extends BaseModel
  implements IIpfsRendererDataAttributes
{
  @JsonProperty()
  cid: string;
}

/**
 * `IpfsRenderer` interface client model
 */
export interface IIpfsRendererDataClientModel extends IRendererDataClientModel {
  attributes: IIpfsRendererDataAttributes | { [key: string]: any };
}

/**
 * `IpfsRenderer` class client model
 */
@JsonObject()
export class IpfsRendererDataClientModel
  extends RendererDataClientModel
  implements IIpfsRendererDataClientModel
{
  @JsonProperty({ type: IpfsRendererDataAttributes })
  attributes: IpfsRendererDataAttributes;
}
