import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel, RequestDto } from "../../../models";

/**
 * Custom action target type.
 * Specifies where the custom action has to be executed
 */
export enum CustomActionRequestType {
  RENDERER = "renderer",
  GENERATION = "generation",
}

/**
 * Request DTO for executing a custom action
 */
export interface ITriggerCustomActionRequestDto extends IBaseModel {
  /**
   * Target resource for running custom action
   */
  resourceType: CustomActionRequestType;

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
  requestBody: string;
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
  resourceType: CustomActionRequestType;

  @JsonProperty()
  resourceId: string;

  @JsonProperty()
  actionName: string;

  @JsonProperty()
  requestBody: string;
}
