import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, IRequestDto, RequestDto } from "../../../models";

/**
 * Type of requested file to be rendered
 */
export enum CollectionRenderFileType {
  METADATA = "metadata",
  IMAGE = "image",
}

/**
 * Request DTO interface for renderCollectionItem endopoint
 */
export interface IRenderCollectionItemRequestDto extends IBaseModel {
  /**
   * Network chain name
   */
  chainName: string;

  /**
   * ID of the collection
   */
  collectionId: string;

  /**
   * Requested file type (image, json metadata, etc.)
   */
  fileType: CollectionRenderFileType;

  /**
   * Requested file name (eg. 3.png, 759.json, etc.)
   */
  requestedFilename: string;

  /**
   * Square size of the eventual image
   */
  imageSize?: string;

  /**
   * Whether to disable mutation of the image
   */
  showMutation?: boolean;
}

/**
 * Request DTO class for renderCollectionItem endopoint
 */
@JsonObject()
export class RenderCollectionItemRequestDto
  extends RequestDto
  implements IRenderCollectionItemRequestDto
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionId: string;

  @JsonProperty()
  fileType: CollectionRenderFileType;

  @JsonProperty()
  requestedFilename: string;

  @JsonProperty()
  imageSize?: string;

  @JsonProperty()
  showMutation?: boolean;
}
