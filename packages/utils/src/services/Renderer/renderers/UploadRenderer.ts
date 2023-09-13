import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";
import { IRendererDataClientModel, RendererDataClientModel } from "../models";

/**
 * Upload strategy to be used in upload renderer.
 * These options can be used together, by forming a bitmask
 */
export enum UploadStrategy {
  /**
   * Allow minters to prepare images/metadata before they mint the items
   */
  PreMint = 0x1,

  /**
   * Allow holders to upload images/metadata after the mint operation
   */
  PostMint = 0x2,
}

export interface IUploadRendererDataAttributes extends IBaseModel {
  /**
   * Enables upload startegies
   */
  uploadStretegies: number;
}

@JsonObject()
export class UploadRendererDataAttributes
  extends BaseModel
  implements IUploadRendererDataAttributes
{
  @JsonProperty()
  uploadStretegies: number;
}

export interface IUploadRendererDataClientModel
  extends IRendererDataClientModel {
  attributes: IUploadRendererDataAttributes | { [key: string]: any };
}

@JsonObject()
export class UploadRendererDataCLientModel
  extends RendererDataClientModel
  implements IUploadRendererDataClientModel
{
  @JsonProperty({ type: UploadRendererDataAttributes })
  attributes: UploadRendererDataAttributes;
}

// export class
