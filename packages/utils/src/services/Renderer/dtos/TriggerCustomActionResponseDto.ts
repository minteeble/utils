import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";

/**
 * CustomAction response
 */
export interface ITriggerCustomActionResponseDto extends IBaseModel {
  /**
   * Action response body
   */
  actionResponse: any;
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
  actionResponse: any;
}
