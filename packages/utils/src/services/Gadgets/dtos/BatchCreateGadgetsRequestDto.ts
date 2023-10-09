import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

/**
 * Represents the data transfer object for a batch create gadgets request.
 * @interface
 */
export interface IBatchCreateGadgetsRequestDto extends IBaseModel {
  /**
   * The ID of the gadget group to which the gadgets belong.
   * @type {string}
   */
  gadgetGroupId: string;

  /**
   * The ID of the request.
   * @type {string}
   */
  requestId: string;
}

/**
 * Represents the data transfer object for a batch create gadgets request.
 * @class
 */
@JsonObject()
export class BatchCreateGadgetsRequestDto
  extends RequestDto
  implements IBatchCreateGadgetsRequestDto
{
  @JsonProperty()
  gadgetGroupId: string;

  @JsonProperty()
  requestId: string;
}
