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
   * Collection network name
   */
  chainName: string;

  /**
   * Nft Collection ID
   */
  collectionId: string;

  /**
   * Target resource for running custom action
   */
  resourceType: CustomActionResourceType;

  /**
   * Represents the ID of the target resource.
   * If `resourceType` is `renderer` than it will be considered as a `rendererId`.
   * Instead, if equal to `generation`, than it will be considered as `generationId.
   * The system will check if the specified resource exists insisde the collection. If not, it will return error.
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
  // isValid(): boolean {
  //   // If resource type is generation, then only generationId is required
  //   if (this.resourceType === CustomActionResourceType.GENERATION) {
  //     return !!this.generationId;
  //   }

  //   // If resource type is renderer, then both generationId and rendererId are required
  //   if (this.resourceType === CustomActionResourceType.RENDERER) {
  //     return !!(this.rendererId && this.generationId);
  //   }

  //   return false;
  // }

  @JsonProperty({ required: true })
  chainName: string;

  @JsonProperty({ required: true })
  collectionId: string;

  @JsonProperty({ required: true })
  resourceType: CustomActionResourceType;

  @JsonProperty({ required: true })
  resourceId: string;

  @JsonProperty({ required: true })
  actionName: string;

  @JsonProperty({ required: true })
  requestBody: CustomActionRequestBody;
}
