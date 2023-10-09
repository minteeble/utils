import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";

/**
 * Represents the response DTO for getting the batch upload URL for gadgets.
 */
export interface IGetGadgetsBatchUploadUrlResponseDto extends IBaseModel {
  /**
   * The URL to which the gadgets should be uploaded.
   */
  uploadUrl: string;

  /**
   * ID of the Gadget group to upload images to
   */
  gadgetGroupId: string;

  /**
   * ID of the request
   */
  requestId: string;
}

/**
 * Represents the response DTO for getting batch upload URL for gadgets.
 */
@JsonObject()
export class GetGadgetsBatchUploadUrlResponseDto
  extends BaseModel
  implements IGetGadgetsBatchUploadUrlResponseDto
{
  @JsonProperty()
  uploadUrl: string;

  @JsonProperty()
  gadgetGroupId: string;

  @JsonProperty()
  requestId: string;
}
