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
   * Generation ID (must be always provided)
   */
  generationId: string;

  /**
   * Renderer ID.
   * It must be provided only if resource to be rendered is a renderer, together with generation ID.
   * For triggering a generation custom action, this field should be empty
   *
   */
  rendererId?: string;

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
  isValid(): boolean {
    // If resource type is generation, then only generationId is required
    if (this.resourceType === CustomActionResourceType.GENERATION) {
      return !!this.generationId;
    }

    // If resource type is renderer, then both generationId and rendererId are required
    if (this.resourceType === CustomActionResourceType.RENDERER) {
      return !!(this.rendererId && this.generationId);
    }

    return false;
  }

  @JsonProperty({ required: true })
  resourceType: CustomActionResourceType;

  @JsonProperty({ required: true })
  generationId: string;

  @JsonProperty({ required: false })
  rendererId?: string;

  @JsonProperty({ required: true })
  actionName: string;

  @JsonProperty({ required: true })
  requestBody: CustomActionRequestBody;
}
