import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel, RequestDto } from "../../../models";

/**
 * Custom action target type.
 * Specifies where the custom action has to be executed
 */
export enum CustomActionResourceType {
  RENDERER = "renderer",
  GENERATION = "generation",
}

/**
 * Request body for custom actions.
 * By default it is a string.
 * For apssing parameters JSON format can be used, the action will automatically decode it.
 */
export type CustomActionRequestBody = string;

/**
 * Request DTO for executing a custom action
 */
export interface ITriggerCustomActionRequestDto extends IBaseModel {
  /**
   * Target resource for running custom action
   */
  resourceType: CustomActionResourceType;

  /**
   * Resourcve unique ID
   */
  resourceId: string;

  /**
   * Action name to be executed inside terget resource.
   * Every resouce can have more than one available actions.
   * Every action is identified by a name
   */
  actionName: string;

  /**
   * Body to be passed to custom action
   */
  requestBody: CustomActionRequestBody;
}

/**
 * Request DTO for executing a custom action
 */
@JsonObject()
export class TriggerCustomActionRequestDto
  extends RequestDto
  implements ITriggerCustomActionRequestDto
{
  @JsonProperty()
  resourceType: CustomActionResourceType;

  @JsonProperty()
  resourceId: string;

  @JsonProperty()
  actionName: string;

  @JsonProperty()
  requestBody: CustomActionRequestBody;
}
