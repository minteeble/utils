import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "./BaseModel";

/**
 * Interface for a resource with a single owner
 */
export interface ISingleOwnable extends IBaseModel {
  /**
   * Wallet of the owner address
   */
  resourceOwner: string;
}

/**
 * Model for resource with a single owner
 */
@JsonObject()
export class SingleOwnable extends BaseModel implements ISingleOwnable {
  @JsonProperty()
  resourceOwner: string;
}
