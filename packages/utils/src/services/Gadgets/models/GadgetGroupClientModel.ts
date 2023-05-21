import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../models"

/**
 * Gadget Group Client Model
 */
export interface IGadgetGroupClientModel extends IBaseModel {
  /**
   * Group's id
   */
  id: string;

  /**
   * Group's name
   */
  name: string;

  /**
   * Group's owner
   */
  resourceOwner: string;

  /**
   * Network's name
   */
  chainName: string;

  /**
   * Group's collection's id
   */
  collectionId: string;
}

@JsonObject()
export class GadgetGroupClientModel
  extends BaseModel
  implements IGadgetGroupClientModel
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  name: string;

  @JsonProperty()
  resourceOwner: string;

  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionId: string;
}
