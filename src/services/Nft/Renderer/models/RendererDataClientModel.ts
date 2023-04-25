import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../shared";

/**
 * NftRenderer type
 */
export enum NftRendererType {
  DEFAULT = "DEFAULT",
  LAYERS = "LAYERS",
  ITEMS = "ITEMS",
}

export interface IRendererDataClientModel extends IBaseModel {
  /**
   * NftRenderer ID
   */
  id: string;

  /**
   * NftRenderer Type
   */
  type: NftRendererType;

  /**
   * Renderer owner
   */
  resourceOwner: string;

  /**
   * Other attributes
   */
  attributes: { [key: string]: string };
}

@JsonObject()
export class RendererDataClientModel
  extends BaseModel
  implements IRendererDataClientModel
{
  @JsonProperty({ required: true })
  id: string;

  @JsonProperty({ required: true })
  type: NftRendererType;

  @JsonProperty({ required: true })
  resourceOwner: string;

  @JsonProperty()
  attributes: { [key: string]: any };

  /**
   *
   * @returns The raw version of renderer data, that can
   * be used later inside NftRenderFactory for determining the correct NftRender instance
   */
  public getRawRendererData(): { [key: string]: any } {
    let object = {
      id: this.id,
      type: this.type,
      resourceOwner: this.resourceOwner,
    };

    return Object.assign(object, this.attributes);
  }
}
