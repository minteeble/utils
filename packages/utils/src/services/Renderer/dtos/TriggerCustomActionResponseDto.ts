import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";

/**
 * Custom actions response body. It does not have  a precise type as different actions can return different responses
 */
export type CustomActionResponseBody = any;

/**
 * CustomAction response
 */
export interface ITriggerCustomActionResponseDto extends IBaseModel {
  /**
   * Action response body
   */
  responseBody: CustomActionResponseBody;

  /**
   * True if action succeded, false otherwise
   */
  success: boolean;

  /**
   * Optional error message, if error is true
   */
  errorMessage?: string;
}

/**
 * CustomAction response
 */
@JsonObject()
export class TriggerCustomActionResponseDto
  extends BaseModel
  implements ITriggerCustomActionResponseDto
{
  @JsonProperty()
  responseBody: CustomActionResponseBody;

  @JsonProperty()
  success: boolean;

  @JsonProperty()
  errorMessage?: string | undefined;
}
