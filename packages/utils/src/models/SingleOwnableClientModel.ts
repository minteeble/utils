import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "./BaseModel";

/**
 * Interface for a resource with a single owner
 */
export interface ISingleOwnableClientModel extends IBaseModel {
  /**
   * Wallet of the owner address
   */
  resourceOwner: string;
}

/**
 * CLient model fora  resource with a single owner
 */
@JsonObject()
export class SingleOwnableClientModel
  extends BaseModel
  implements ISingleOwnableClientModel
{
  @JsonProperty()
  resourceOwner: string;
}
